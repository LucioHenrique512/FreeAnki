import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../commons';

import {GreetingsStepView} from './greetings';
import {LoginView} from './login';

const OnboardingSteps = () => {
  const scrollViewRef = useRef<any>(null);

  const scrollTo = (scrollTo: number) => {
    scrollViewRef.current?.scrollTo({
      x: scrollTo,
      y: 0,
      animated: true,
    });
  };

  return (
    <Container ref={scrollViewRef} horizontal scrollEnabled={false}>
      <LoginView />
      <GreetingsStepView
        onButtonPress={() => {
          scrollTo(Sizes.SCREEN_WIDTH);
        }}
      />
    </Container>
  );
};

export default OnboardingSteps;

const Container = styled.ScrollView`
  width: ${Sizes.SCREEN_WIDTH}px;
`;
