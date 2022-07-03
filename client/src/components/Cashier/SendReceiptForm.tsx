import React from 'react';
import {Box, VStack, Button, HStack, Text, IBoxProps} from 'native-base';
import {RHTextInput} from '../../shared/components';
import {Control} from 'react-hook-form';
import {ISendReceiptFormDefaultValues} from './Payment/PaymentLandingModal';

interface Props {
  control: Control<ISendReceiptFormDefaultValues, object>;
  errors: any;
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
  isLoading: boolean;
  w?: IBoxProps['w'];
}

const SendReceiptForm = ({
  control,
  errors,
  handleSubmit,
  isLoading,
  w = ['full', 'full', '3/5'],
}: Props) => {
  return (
    <Box w={w}>
      <Box>
        <RHTextInput
          name="customer_name"
          control={control}
          errors={errors}
          label="Nama Customer"
        />

        <RHTextInput
          format="phoneNumber"
          keyboardType="number-pad"
          name="phone_number"
          control={control}
          errors={errors}
          label="Contact Whatsapp"
          InputLeftElement={
            <HStack bgColor="primary.700" h="full" alignItems="center" px="3">
              <Text color="white">+62</Text>
            </HStack>
          }
        />
      </Box>
      <Button mt={4} isLoading={isLoading} onPress={handleSubmit}>
        Kirim
      </Button>
    </Box>
  );
};

export default SendReceiptForm;
