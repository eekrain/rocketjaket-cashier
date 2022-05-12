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
  Modal,
} from 'native-base';
import {SettingsHomeProps} from '../../screens/app/SettingsScreen';
import {
  useWhatsapp_GetAuthStatusQuery,
  useWhatsapp_SignOutMutation,
} from '../../graphql/gql-generated';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {Alert, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useMyAppState} from '../../state';
import {TOAST_TEMPLATE} from '../../shared/constants';
import FastImage from 'react-native-fast-image';
import useCountDown from 'react-countdown-hook';
import {myNumberFormat} from '../../shared/utils';

const initialTime = 20 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

interface ITokoHomeProps extends SettingsHomeProps {}

const WhatsappHome = ({}: ITokoHomeProps) => {
  const myAppState = useMyAppState();
  const toast = useToast();
  const [timeLeft, {start: startCountdown}] = useCountDown(
    initialTime,
    interval,
  );
  const [waiting, setWaiting] = useState(false);
  const [doneWaiting, setDoneWaiting] = useState(true);

  const colTitleW = useBreakpointValue({
    base: '40%',
    lg: '30%',
  });
  const colTitle: StyleProp<ViewStyle> = {
    width: colTitleW,
  };
  const colDividerW = useBreakpointValue({
    base: '5%',
    lg: '5%',
  });
  const colDivider: StyleProp<ViewStyle> = {
    width: colDividerW,
  };
  const colValueW = useBreakpointValue({
    base: '55%',
    lg: '55%',
  });
  const colValue: StyleProp<ViewStyle> = {
    width: colValueW,
  };

  const getWAAuthStatus = useWhatsapp_GetAuthStatusQuery();
  console.log(
    '🚀 ~ file: WhatsappHome.tsx ~ line 66 ~ WhatsappHome ~ getWAAuthStatus',
    getWAAuthStatus.error,
  );

  useEffect(() => {
    if (timeLeft === 0 && waiting && !doneWaiting) {
      setWaiting(false);
      setDoneWaiting(true);
      getWAAuthStatus.refetch();
    }
  }, [doneWaiting, getWAAuthStatus, timeLeft, waiting]);

  useEffect(() => {
    myAppState.setLoadingWholePage(getWAAuthStatus.loading);
  }, [getWAAuthStatus.loading, myAppState]);

  const WAAuthStatus = useMemo(() => {
    return getWAAuthStatus.data?.Whatsapp_GetAuthStatus;
  }, [getWAAuthStatus.data?.Whatsapp_GetAuthStatus]);

  const [whatsappSignout] = useWhatsapp_SignOutMutation({});

  const handleWhatsappSignout = useCallback(async () => {
    const doSignout = async () => {
      const res = await whatsappSignout().catch(error => {
        console.log(
          '🚀 ~ file: WhatsappHome.tsx ~ line 71 ~ res ~ error',
          error,
        );
        toast.show({
          ...TOAST_TEMPLATE.error('Gagal melakukan sign out whatsapp!'),
        });
      });

      if (res && res.data?.Whatsapp_SignOut?.is_success) {
        startCountdown();
        setWaiting(true);
        setDoneWaiting(false);
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
  }, [WAAuthStatus?.client_name, startCountdown, toast, whatsappSignout]);

  return (
    <Box>
      <Modal isOpen={waiting && timeLeft > 0} size="xl">
        <Modal.Content>
          <Modal.Header>Tunggu! Sedang Refresh Server!</Modal.Header>
          <Stack direction="column" px="3" pt="3" pb="6" alignItems="center">
            <Text fontSize="xl" mb="4">
              Waktu tunggu tersisa {timeLeft / 1000}
            </Text>
            <FastImage
              style={{width: 50, height: 50, alignSelf: 'center'}}
              source={require('../../assets/images/indicator5.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Stack>
        </Modal.Content>
      </Modal>

      <HStack mb="10" mt="4" justifyContent="space-between">
        <Heading fontSize="xl">Whatsapp</Heading>
        <Button onPress={() => getWAAuthStatus.refetch()}>Refresh</Button>
      </HStack>
      <Stack direction={['column', 'column', 'row-reverse']}>
        <Box flex={1} alignItems="center">
          {WAAuthStatus?.qrcode && (
            <>
              <QRCode value={WAAuthStatus.qrcode} size={200} />
              <Heading fontSize="lg" mt="4">
                Scan Untuk Masuk
              </Heading>
            </>
          )}
        </Box>
        <Box w={['full', '4/5', '2/5']}>
          <Grid style={{width: '100%'}}>
            <Row style={defaultStyles.row}>
              <Col style={colTitle}>
                <Text>Autentikasi</Text>
              </Col>
              <Col style={colDivider}>
                <Text>:</Text>
              </Col>
              <Col style={{width: 'auto'}}>
                <Badge
                  padding={2}
                  colorScheme={
                    WAAuthStatus?.is_authenticated ? 'success' : 'danger'
                  }>
                  {WAAuthStatus?.is_authenticated ? 'Signed In' : 'Signed Out'}
                </Badge>
              </Col>
            </Row>
            {WAAuthStatus?.client_state && (
              <Row style={defaultStyles.row}>
                <Col style={colTitle}>
                  <Text>Status</Text>
                </Col>
                <Col style={colDivider}>
                  <Text>:</Text>
                </Col>
                <Col style={colValue}>
                  <Text>{WAAuthStatus.client_state}</Text>
                </Col>
              </Row>
            )}
            {WAAuthStatus?.client_name && (
              <Row style={defaultStyles.row}>
                <Col style={colTitle}>
                  <Text>Nama WA</Text>
                </Col>
                <Col style={colDivider}>
                  <Text>:</Text>
                </Col>
                <Col style={colValue}>
                  <Text>{WAAuthStatus?.client_name}</Text>
                </Col>
              </Row>
            )}
            {WAAuthStatus?.client_phone_number && (
              <Row style={defaultStyles.row}>
                <Col style={colTitle}>
                  <Text>Nomor WA</Text>
                </Col>
                <Col style={colDivider}>
                  <Text>:</Text>
                </Col>
                <Col style={colValue}>
                  <Text>
                    {WAAuthStatus?.client_phone_number
                      ? myNumberFormat.phoneNumber(
                          WAAuthStatus.client_phone_number,
                          'with+62',
                        )
                      : ''}
                  </Text>
                </Col>
              </Row>
            )}
            {WAAuthStatus?.client_platform && (
              <Row style={defaultStyles.row}>
                <Col style={colTitle}>
                  <Text>HP</Text>
                </Col>
                <Col style={colDivider}>
                  <Text>:</Text>
                </Col>
                <Col style={colValue}>
                  <Text>{WAAuthStatus?.client_platform}</Text>
                </Col>
              </Row>
            )}
            {WAAuthStatus?.is_authenticated && (
              <Row
                style={{
                  height: 80,
                  alignItems: 'center',
                }}>
                <Col>
                  <Button
                    w="100"
                    colorScheme="milano_red"
                    onPress={handleWhatsappSignout}>
                    Sign Out
                  </Button>
                </Col>
              </Row>
            )}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

const defaultStyles = StyleSheet.create({
  row: {
    height: 35,
    alignItems: 'center',
  },
});

export default WhatsappHome;
