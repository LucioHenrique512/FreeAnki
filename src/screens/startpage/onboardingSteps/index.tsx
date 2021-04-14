import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../commons';
import {useDispatch} from 'react-redux';
import {onboardingActions} from '../../../actions';

import {GreetingsStepView} from './greetings';
import {LoginView} from './login';
import {onboardingSteps} from '../index';
import {SignupStep} from './signup';
import {TFunction} from 'i18next';
import {LoadingStep} from './loadingstep';

interface OnboardingStepsProps {
  currentStep?: any;
  handleStepChange?: any;
  translator: TFunction;
}

const OnboardingSteps = ({
  currentStep,
  handleStepChange,
  translator,
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
            onButtonPress={() => changeStep(onboardingSteps.LOADING)}
            onLinkPress={() => changeStep(onboardingSteps.SIGNUP)}
            translator={translator}
          />
        );
      case onboardingSteps.SIGNUP.stepId:
        return (
          <SignupStep
            onSignupPress={() => changeStep(onboardingSteps.GREETINGS)}
            onLinkPress={() => changeStep(onboardingSteps.LOGIN)}
            translator={translator}
          />
        );
      case onboardingSteps.LOADING.stepId:
        return <LoadingStep translator={translator} />;
    }
  };

  return (
    <Container ref={scrollViewRef} horizontal scrollEnabled={true}>
      <GreetingsStepView
        onButtonPress={() => changeStep(onboardingSteps.SIGNUP)}
        onLinkPress={() => changeStep(onboardingSteps.LOGIN)}
        translator={translator}
      />
      {renderNextStep(currentStep)}
    </Container>
  );
};

export default OnboardingSteps;

const Container = styled.ScrollView`
  width: ${Sizes.SCREEN_WIDTH}px;
`;
