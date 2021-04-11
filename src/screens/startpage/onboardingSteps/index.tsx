import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../commons';
import {useDispatch} from 'react-redux';
import {onboardingActions} from '../../../actions';

import {GreetingsStepView} from './greetings';
import {LoginView} from './login';
import {onboardingSteps} from '../index';

interface OnboardingStepsProps {
  currentStep?: any;
  handleStepChange?: any;
}

const OnboardingSteps = ({
  currentStep,
  handleStepChange,
}: OnboardingStepsProps) => {
  const dispatch = useDispatch();
  const scrollViewRef = useRef<any>(null);

  const scrollTo = (scrollTo: number) => {
    scrollViewRef.current?.scrollTo({
      x: scrollTo,
      y: 0,
      animated: true,
    });
  };

  const changeStep = (step: any) => {
    dispatch(onboardingActions.changeStep(step));
    handleStepChange(step);
    scrollTo(step.scrollTo);
  };

  return (
    <Container ref={scrollViewRef} horizontal scrollEnabled={false}>
      <GreetingsStepView
        onButtonPress={() => changeStep(onboardingSteps.LOGIN)}
      />
      <LoginView onButtonPress={() => changeStep(onboardingSteps.GREETINGS)} />
    </Container>
  );
};

export default OnboardingSteps;

const Container = styled.ScrollView`
  width: ${Sizes.SCREEN_WIDTH}px;
`;
