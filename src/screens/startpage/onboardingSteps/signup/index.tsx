import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Button, Text, TextInput} from '../../../../components';
import {localizedText} from '../../../../texts';

interface SignupStepProps {
  onSignupPress?: any;
  onLinkPress?: any;
}

export const SignupStep = ({onSignupPress, onLinkPress}: SignupStepProps) => {
  return (
    <Container>
      <Text
        size={fontScale(20)}
        text={localizedText('startScreen.steps.signup.title')}
        textAlign="left"
        fontWeight="bold"
        marginBottom={verticalScale(30)}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.signup.name')}
        marginBottom={20}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.signup.username')}
        marginBottom={20}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.signup.email')}
        marginBottom={20}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.signup.password')}
        marginBottom={20}
      />
      <TextInput
        placeholder={localizedText('startScreen.steps.signup.confirmPassword')}
        marginBottom={40}
      />

      <Button
        onPress={onSignupPress}
        text={localizedText('startScreen.steps.signup.button')}
      />

      <Button
        text={localizedText('startScreen.steps.signup.link')}
        linkStyle
        underline
        onPress={onLinkPress}
        marginTop={15}
      />
    </Container>
  );
};

const Container = styled.View`
  width: ${Sizes.SCREEN_WIDTH}px;
  padding: 25px;
`;
