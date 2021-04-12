import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../commons';
import {useDispatch} from 'react-redux';
import {onboardingActions} from '../../../actions';

import {GreetingsStepView} from './greetings';
import {LoginView} from './login';
import {onboardingSteps} from '../index';
import {SignupStep} from './signup';

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

  useEffect(() => {
    scrollTo(currentStep?.scrollTo);
  }, [currentStep, scrollTo]);

  const changeStep = (step: any) => {
    dispatch(onboardingActions.changeStep(step));
    handleStepChange(step);
  };

  const renderNextStep = (step: any) => {
    //console.log('STEP', step);
    switch (step?.stepId) {
      case onboardingSteps.LOGIN.stepId:
        return (
          <LoginView
            onButtonPress={() => changeStep(onboardingSteps.GREETINGS)}
            onLinkPress={() => changeStep(onboardingSteps.SIGNUP)}
          />
        );
      case onboardingSteps.SIGNUP.stepId:
        return (
          <SignupStep
            onSignupPress={() => changeStep(onboardingSteps.GREETINGS)}
            onLinkPress={() => changeStep(onboardingSteps.LOGIN)}
          />
        );
    }
  };

  return (
    <Container ref={scrollViewRef} horizontal scrollEnabled={true}>
      <GreetingsStepView
        onButtonPress={() => changeStep(onboardingSteps.SIGNUP)}
        onLinkPress={() => changeStep(onboardingSteps.LOGIN)}
      />
      {renderNextStep(currentStep)}
    </Container>
  );
};

export default OnboardingSteps;

const Container = styled.ScrollView`
  width: ${Sizes.SCREEN_WIDTH}px;
`;
