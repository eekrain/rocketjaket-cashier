import React from 'react';
import {Button, Icon, IButtonProps} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IButtonProps {
  customText?: string;
}

const ButtonBack = ({size, customText, ...rest}: Props) => {
  return (
    <Button
      size={size ? size : 'lg'}
      colorScheme="warning"
      leftIcon={<Icon as={Feather} name="log-out" size="sm" />}
      {...rest}>
      {customText ? customText : 'Kembali'}
    </Button>
  );
};

export default ButtonBack;
