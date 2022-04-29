import React from 'react';
import {HStack, Input, Icon} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {
  searchTerm: string;
  setSearhTerm: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTableHeader = ({searchTerm, setSearhTerm}: Props) => {
  return (
    <HStack
      bgColor="white"
      borderTopLeftRadius="xl"
      borderTopRightRadius="xl"
      style={{paddingLeft: 20, paddingTop: 20}}>
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
