import {TFunction} from 'i18next';
import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Button, Text} from '../../../../components';

interface GreetingsStepViewProps {
  onButtonPress?: any;
  onLinkPress?: any;
  translator: TFunction;
}

export const GreetingsStepView = ({
  onButtonPress,
  onLinkPress,
  translator,
}: GreetingsStepViewProps) => {
  return (
    <Container>
      <Text
        size={fontScale(20)}
        text={translator('greetings.title')}
        textAlign="left"
        fontWeight="bold"
        marginBottom={verticalScale(22)}
      />
      <Text
        size={fontScale(12)}
        text={translator('greetings.subtitle')}
        textAlign="left"
        secondary
        marginBottom={verticalScale(22)}
      />
      <Button onPress={onButtonPress} text={translator('greetings.button')} />
      <Button
        text={translator('greetings.link')}
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
