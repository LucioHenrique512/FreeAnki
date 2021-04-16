import {TFunction} from 'i18next';
import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Button, Text, TextInput} from '../../../../components';

interface LoginViewProps {
  onButtonPress?: any;
  onLinkPress?: any;
  translator: TFunction;
}

export const LoginView = ({
  onButtonPress,
  onLinkPress,
  translator,
}: LoginViewProps) => {
  return (
    <Container>
      <Text
        size={fontScale(20)}
        text={translator('login.title')}
        textAlign="left"
        fontWeight="bold"
        marginBottom={verticalScale(22)}
      />
      <TextInput placeholder={translator('login.username')} marginBottom={20} />
      <TextInput placeholder={translator('login.password')} marginBottom={20} />

      <Button onPress={onButtonPress} text={translator('login.button')} />

      <Button
        text={translator('login.link')}
        linkStyle
        underline
        onPress={onLinkPress}
        marginTop={15}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 25px;
  width: ${Sizes.SCREEN_WIDTH}px;
`;
