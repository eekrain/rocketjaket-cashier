import React from 'react';
import {Button, Icon, IButtonProps} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IButtonProps {
  customText?: string;
}

const ButtonAdd = ({size, customText, ...rest}: Props) => {
  return (
    <Button
      size={size ? size : 'md'}
      leftIcon={<Icon as={Feather} name="plus-circle" size="sm" />}
      {...rest}>
      {customText ? customText : 'Add'}
    </Button>
  );
};

export default ButtonAdd;
