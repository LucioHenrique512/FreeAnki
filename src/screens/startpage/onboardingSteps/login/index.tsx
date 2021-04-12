import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Button, Text, TextInput} from '../../../../components';
import {localizedText} from '../../../../texts';

interface LoginViewProps {
  onButtonPress?: any;
  onLinkPress?: any;
}

export const LoginView = ({onButtonPress, onLinkPress}: LoginViewProps) => {
  return (
    <Container>
      <Text
        size={fontScale(20)}
        text={localizedText('startScreen.steps.login.title')}
        textAlign="left"
        fontWeight="bold"
        marginBottom={verticalScale(22)}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.login.username')}
        marginBottom={20}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.login.password')}
        marginBottom={20}
      />

      <Button
        onPress={onButtonPress}
        text={localizedText('startScreen.steps.login.button')}
      />

      <Button
        text={localizedText('startScreen.steps.login.link')}
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
