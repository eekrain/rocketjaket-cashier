import React from 'react';
import {Icon, IIconButtonProps, IconButton} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IIconButtonProps {}

const ButtonEdit = ({size, ...rest}: Props) => {
  return (
    <IconButton
      size={size ? size : 'xs'}
      variant="solid"
      icon={<Icon as={Feather} name="edit" size="sm" />}
      {...rest}
    />
  );
};

export default ButtonEdit;
