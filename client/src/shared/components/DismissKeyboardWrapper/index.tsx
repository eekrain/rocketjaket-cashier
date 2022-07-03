import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

interface Props {}

export const DismissKeyboardWrapper = ({
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};
