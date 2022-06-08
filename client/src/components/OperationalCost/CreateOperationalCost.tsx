import React from 'react';
import {Box, HStack, VStack, Heading, ScrollView, useToast} from 'native-base';
import withAppLayout from '../Layout/AppLayout';
import {
  namedOperations,
  useOperationalCost_CreateOneMutation,
} from '../../graphql/gql-generated';
import * as yup from 'yup';
import {useMyUser} from '../../shared/utils';
import {TOAST_TEMPLATE} from '../../shared/constants';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  DismissKeyboardWrapper,
  RHNumberInput,
  RHTextInput,
} from '../../shared/components';
import {CreateOperationalCostNavProps} from '../../screens/app/OperationalCostScreen';
import to from 'await-to-js';
import {ButtonBack, ButtonSave} from '../Buttons';

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

interface ICreateOperationalCostProps extends CreateOperationalCostNavProps {}

const CreateOperationalCost = ({
  navigation,
  route,
}: ICreateOperationalCostProps) => {
  const toast = useToast();
  const myUser = useMyUser();

  const {
    handleSubmit,
    control,
    formState: {errors},
    reset,
    watch,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  console.log(
    '🚀 ~ file: CreateOperationalCost.tsx ~ line 62 ~ CreateOperationalCost ~ watch',
    watch(),
  );

  const [createOperationalCost, _createOperationalCostResult] =
    useOperationalCost_CreateOneMutation({
      refetchQueries: [namedOperations.Query.OperationalCost_GetAllCostByStore],
    });

  const handleSubmission = async (data: IDefaultValues) => {
    const [err, res] = await to(
      createOperationalCost({
        variables: {
          object: {
            reason: data.reason,
            cost: data.cost.value,
            karyawan_name: myUser.displayName,
            store_id: route.params.storeId,
          },
        },
      }),
    );
    if (err || !res) {
      toast.show(
        TOAST_TEMPLATE.error(
          `Gagal melakukan penambahan biaya operasional untuk ${data.reason}.`,
        ),
      );
    } else {
      reset();
      toast.show(
        TOAST_TEMPLATE.success(
          `Berhasil melakukan penambahan biaya operasional untuk ${data.reason}.`,
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
            Buat Biaya Operasional Baru
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
                  isLoading={_createOperationalCostResult.loading}
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

export default withAppLayout(CreateOperationalCost);
