/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Box,
  Heading,
  Text,
  Badge,
  useBreakpointValue,
  Stack,
  HStack,
  Button,
  useToast,
  Center,
} from 'native-base';
import {
  useWhatsapp_GetAuthStatusQuery,
  useWhatsapp_SignOutMutation,
} from '../../graphql/gql-generated';
import {Alert, ScrollView, useWindowDimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useMyAppState} from '../../state';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {myNumberFormat} from '../../shared/utils';
import {IDataSimpleGrid, SimpleDataGrid} from '../../shared/components';
import to from 'await-to-js';

interface ITokoHomeProps {}

const WhatsappHome = ({}: ITokoHomeProps) => {
  const myAppState = useMyAppState();
  const toast = useToast();

  const window = useWindowDimensions();

  const simpleGridWidth: number | 'full' = useBreakpointValue({
    base: 'full',
    lg: window.width * 0.5,
  });

  const getWAAuthStatus = useWhatsapp_GetAuthStatusQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    myAppState.setLoadingWholePage(getWAAuthStatus.loading);
    return () => {
      myAppState.setLoadingWholePage(false);
    };
  }, [getWAAuthStatus.loading]);

  const WAAuthStatus = useMemo(() => {
    return getWAAuthStatus.data?.Whatsapp_GetAuthStatus || null;
  }, [getWAAuthStatus.data?.Whatsapp_GetAuthStatus]);

  const [whatsappSignout] = useWhatsapp_SignOutMutation({});

  const handleWhatsappSignout = useCallback(async () => {
    const doSignout = async () => {
      const [err, res] = await to(whatsappSignout());
      if (err || !res) {
        console.log('🚀 ~ file: WhatsappHome.tsx ~ line 71 ~ res ~ error', err);
        toast.show(TOAST_TEMPLATE.error('Gagal melakukan sign out whatsapp!'));
      } else {
        toast.show(
          TOAST_TEMPLATE.error(
            'Berhasil melakukan sign out whatsapp! Tunggu sesaat untuk update status autentikasi.',
          ),
        );
      }
    };
    Alert.alert(
      'Signout Whatsapp',
      `Whatsapp dengan nama ${WAAuthStatus?.client_name} akan di keluarkan. Lanjutkan?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          onPress: doSignout,
          text: 'Keluar',
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  }, [WAAuthStatus?.client_name, toast, whatsappSignout]);

  const errorGrid: IDataSimpleGrid[] = WAAuthStatus?.isError
    ? [
        {
          title: 'Error',
          value: () => <Text color="red.600">{WAAuthStatus.errorMessage}</Text>,
        },
      ]
    : [];

  const otherStatus: IDataSimpleGrid[] =
    WAAuthStatus?.isError === false && WAAuthStatus?.client_state
      ? [
          {
            title: 'Status',
            value: WAAuthStatus.client_state,
          },
          {
            title: 'Nama Whatsapp',
            value: WAAuthStatus?.client_name,
          },
          {
            title: 'Nomor Whatsapp',
            value: myNumberFormat.phoneNumber(
              WAAuthStatus.client_phone_number,
              'with+62',
            ),
          },
          {
            title: 'Platform',
            value: WAAuthStatus?.client_platform,
          },
        ]
      : [];

  return (
    <ScrollView>
      <Box pb="64">
        <HStack mb="10" mt="4" justifyContent="space-between">
          <Heading fontSize="xl">Whatsapp</Heading>
          <HStack space={'4'}>
            <Button onPress={async () => await getWAAuthStatus.refetch()}>
              Refresh
            </Button>
            {WAAuthStatus?.is_authenticated === true && (
              <Button colorScheme={'danger'} onPress={handleWhatsappSignout}>
                Signout
              </Button>
            )}
          </HStack>
        </HStack>

        <Stack
          direction={{base: 'column', lg: 'row'}}
          alignItems={{base: 'center', lg: 'flex-start'}}
          space={{base: '20', lg: 0}}>
          <SimpleDataGrid
            titleWidthRatio={0.5}
            dividerWidthRatio={0.1}
            valueWidthRatio={1.2}
            rowHeight={50}
            gridWidth={simpleGridWidth}
            data={[
              {
                title: 'Autentikasi',
                value: () => (
                  <Badge
                    padding={2}
                    width="20"
                    colorScheme={
                      WAAuthStatus?.is_authenticated ? 'success' : 'danger'
                    }>
                    {WAAuthStatus?.is_authenticated
                      ? 'Signed In'
                      : 'Signed Out'}
                  </Badge>
                ),
              },
              ...errorGrid,
              ...otherStatus,
            ]}
          />

          {WAAuthStatus?.qrcode && (
            <Box flex={1}>
              <Center>
                <QRCode value={WAAuthStatus.qrcode} size={200} />
                <Center>
                  <Heading fontSize="lg" mt="4">
                    Scan Untuk Masuk
                  </Heading>
                </Center>
              </Center>
            </Box>
          )}
        </Stack>
      </Box>
    </ScrollView>
  );
};

export default WhatsappHome;
