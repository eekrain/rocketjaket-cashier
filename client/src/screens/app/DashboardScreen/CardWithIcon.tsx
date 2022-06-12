import React from 'react';
import {Box, HStack, Icon, Text} from 'native-base';
import {InterfaceHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';
import {InterfaceIconProps} from 'native-base/lib/typescript/components/primitives/Icon/types';

interface CardWithIconProps {
  title: string;
  value: string;
  __icon: InterfaceIconProps;
  _cardStyle?: InterfaceHStackProps;
  _titleStyle?: InterfaceTextProps;
  _valueStyle?: InterfaceTextProps;
}

const cardDefault: InterfaceHStackProps = {
  alignItems: 'center',
  borderRadius: 'lg',
  pl: {base: '2', md: '4'},
  bgColor: 'teal.600',
  w: {base: '48%', md: '35%', lg: '36%'},
  h: {base: 55, md: 91},
  py: 2,
  space: '2',
};
const titleDefault: InterfaceTextProps = {
  fontWeight: 'bold',
  fontSize: {base: 'sm', md: 'sm', lg: 'lg'},
  color: 'white',
  w: {base: '100%', md: '80%', lg: '80%'},
  opacity: '0.8',
};

const iconDefault: InterfaceIconProps = {
  size: '3xl',
  color: 'white',
  opacity: 0.3,
};

const valueDefault: InterfaceTextProps = {
  fontWeight: 'bold',
  color: 'white',
  fontSize: {base: 'sm', md: 'sm', lg: 'lg'},
};

export const CardWithIcon = ({
  title,
  value,
  _cardStyle = {},
  _titleStyle = {},
  _valueStyle = {},
  __icon,
}: CardWithIconProps) => {
  return (
    <HStack {...{...cardDefault, ..._cardStyle}}>
      <Icon {...{...iconDefault, ...__icon}} />
      <Box>
        <Text {...{...titleDefault, ..._titleStyle}}>{title}</Text>
        <Text {...{...valueDefault, ..._valueStyle}}>{value}</Text>
      </Box>
    </HStack>
  );
};
