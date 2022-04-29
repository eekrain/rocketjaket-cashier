import React from 'react';
import {Button, Icon, IButtonProps} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IButtonProps {
  customText?: string;
}

const ButtonSave = ({size, customText, ...rest}: Props) => {
  return (
    <Button
      size={size ? size : 'lg'}
      leftIcon={<Icon as={Feather} name="save" size="sm" />}
      {...rest}>
      {customText ? customText : 'Simpan'}
    </Button>
  );
};

export default ButtonSave;
