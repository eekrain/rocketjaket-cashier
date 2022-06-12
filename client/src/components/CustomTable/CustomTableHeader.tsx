import React from 'react';
import {HStack, Input, Icon, IBoxProps} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {
  searchTerm: string;
  setSearhTerm: React.Dispatch<React.SetStateAction<string>>;
  customTableHeaderStyle?: IBoxProps;
}

const CustomTableHeader = ({
  searchTerm,
  setSearhTerm,
  customTableHeaderStyle,
}: Props) => {
  return (
    <HStack {...defaultStyle.container} {...customTableHeaderStyle}>
      <Input
        value={searchTerm}
        onChangeText={text => setSearhTerm(text)}
        w={{
          base: '75%',
          md: '40%',
        }}
        InputLeftElement={
          <Icon
            as={<FeatherIcon name="search" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Search..."
      />
    </HStack>
  );
};

export default CustomTableHeader;

const defaultStyle: {container: IBoxProps} = {
  container: {
    bgColor: 'white',
    borderTopLeftRadius: 'xl',
    borderTopRightRadius: 'xl',
    paddingLeft: 21,
    paddingTop: 21,
  },
};
