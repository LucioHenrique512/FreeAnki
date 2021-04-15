import {TFunction} from 'i18next';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Button, Text, TextInput} from '../../../../components';

interface SignupStepProps {
  onSignupPress?: any;
  onLinkPress?: any;
  translator: TFunction;
}

export const SignupStep = ({
  onSignupPress,
  onLinkPress,
  translator,
}: SignupStepProps) => {
  return (
    <Container>
      <StyledScrollView>
        <InputContainer>
          <Text
            size={fontScale(20)}
            text={translator('signup.title')}
            textAlign="left"
            fontWeight="bold"
            marginBottom={verticalScale(30)}
          />
          <TextInput
            placeholder={translator('signup.name')}
            marginBottom={20}
          />
          <TextInput
            placeholder={translator('signup.email')}
            marginBottom={20}
          />
          <TextInput
            placeholder={translator('signup.password')}
            marginBottom={20}
          />
          <TextInput
            placeholder={translator('signup.confirmPassword')}
            marginBottom={40}
          />

          <Button onPress={onSignupPress} text={translator('signup.button')} />

          <Button
            text={translator('signup.link')}
            linkStyle
            underline
            onPress={onLinkPress}
            marginTop={15}
          />
        </InputContainer>
      </StyledScrollView>
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView`
  width: ${Sizes.SCREEN_WIDTH}px;
  position: relative;
  padding: 25px;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledScrollView = styled.ScrollView``;

const InputContainer = styled.View``;
