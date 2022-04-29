import React from 'react';
import {Button, Icon, IButtonProps} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IButtonProps {
  customText?: string;
}

const ButtonDelete = ({size, customText, ...rest}: Props) => {
  return (
    <Button
      size={size ? size : 'md'}
      bgColor="milano_red.500"
      leftIcon={<Icon as={Feather} name="trash-2" size="sm" />}
      {...rest}>
      {customText ? customText : 'Delete'}
    </Button>
  );
};

export default ButtonDelete;
