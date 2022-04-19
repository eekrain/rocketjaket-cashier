import React from 'react';
import {Icon, IIconButtonProps, IconButton} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IIconButtonProps {}

const ButtonDelete = ({size, ...rest}: Props) => {
  return (
    <IconButton
      size={size ? size : 'xs'}
      variant="solid"
      bgColor="milano_red.500"
      icon={<Icon as={Feather} name="trash-2" size="sm" />}
      {...rest}
    />
  );
};

export default ButtonDelete;
