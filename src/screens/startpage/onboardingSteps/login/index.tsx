import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Button, Text} from '../../../../components';
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
