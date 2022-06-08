import React, {useEffect, useState} from 'react';
import {Box, HStack, VStack, Heading, ScrollView, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useOperationalCost_GetByIdQuery,
  useOperationalCost_UpdateByIdMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {myNumberFormat, useMyUser} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  DismissKeyboardWrapper,
  RHNumberInput,
  RHTextInput,
} from '../../shared/components';
import {ButtonSave, ButtonBack} from '../Buttons';
import {useMyAppState} from '../../state';
import {UpdateOperationalCostNavProps} from '../../screens/app/OperationalCostScreen';

interface IDefaultValues {
  reason: string;
  cost: {formattedValue: string; value: number};
}

const schema = yup
  .object({
    reason: yup.string().required('Alasan harus diisi!'),
    cost: yup.object({
      value: yup.number().min(1, 'Biaya belum diisi!').required(),
    }),
  })
  .required();

const defaultValues: IDefaultValues = {
  reason: '',
  cost: {
    formattedValue: '0',
    value: 0,
  },
};

interface IUpdateOperationalCostProps extends UpdateOperationalCostNavProps {}

const UpdateOperationalCost = ({
  navigation,
  route,
}: IUpdateOperationalCostProps) => {
  const toast = useToast();
  const myAppState = useMyAppState();
  const myUser = useMyUser();
  const [isErrorOnce, setErrorOnce] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors, isSubmitSuccessful, isDirty},
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const getDataOperationalCost = useOperationalCost_GetByIdQuery({
    variables: {id: route.params.operationalCostId || 0},
  });
  const dataOperationalCost =
    getDataOperationalCost.data?.operational_costs_by_pk;

  useEffect(() => {
    myAppState.setLoadingWholePage(getDataOperationalCost.loading);
  }, [getDataOperationalCost.loading, myAppState]);

  useEffect(() => {
    if (dataOperationalCost === null && !isErrorOnce) {
      toast.show(TOAST_TEMPLATE.error('Kategori Produk tidak ditemukan.'));
      navigation.goBack();
      setErrorOnce(true);
    } else {
      if (dataOperationalCost) {
        setValue('reason', dataOperationalCost.reason);
        setValue('cost', {
          value: dataOperationalCost.cost,
          formattedValue: myNumberFormat.thousandSeparated(
            dataOperationalCost.cost,
          ),
        });
      }
    }
  }, [dataOperationalCost, isErrorOnce, navigation, setValue, toast]);

  const [updateById, _updateByIdResult] = useOperationalCost_UpdateByIdMutation(
    {
      refetchQueries: [namedOperations.Query.OperationalCost_GetAllCostByStore],
    },
  );

  const handleSubmission = async (data: IDefaultValues) => {
    if (!isDirty) {
      if (!isDirty)
        toast.show(
          TOAST_TEMPLATE.cancelled('Kategori produk tidak ada yang diubah.'),
        );
      navigation.goBack();
      reset(defaultValues);
      return;
    }
    const res = await updateById({
      variables: {
        id: route.params.operationalCostId,
        _set: {
          reason: data.reason,
          cost: data.cost.value,
          karyawan_name: myUser.displayName,
        },
      },
    });
    if (res.errors) {
      toast.show(
        TOAST_TEMPLATE.error(
          `Gagal melakukan update biaya operasional untuk ${data.reason}.`,
        ),
      );
    } else {
      reset(defaultValues);
      toast.show(
        TOAST_TEMPLATE.success(
          `Berhasil melakukan update biaya operasional untuk ${data.reason}.`,
        ),
      );
      navigation.goBack();
    }
  };

  return (
    <ScrollView>
      <DismissKeyboardWrapper>
        <Box>
          <Heading fontSize="xl" mb="10">
            Update Biaya Operasional
          </Heading>

          <Box bgColor="white" p="8">
            <VStack space="4">
              <RHTextInput
                name="reason"
                control={control}
                errors={errors}
                label="Alasan"
              />
              <RHNumberInput
                keyboardType="number-pad"
                name="cost"
                control={control}
                errors={errors}
                label="Biaya Operasional"
                format="rp"
              />

              <HStack justifyContent="flex-end" mt="5" space="4">
                <ButtonSave
                  isLoading={_updateByIdResult.loading}
                  onPress={handleSubmit(handleSubmission)}
                />
                <ButtonBack onPress={() => navigation.goBack()} />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </DismissKeyboardWrapper>
    </ScrollView>
  );
};

export default withAppLayout(UpdateOperationalCost);
