import React, {useEffect} from 'react';
import {fontScale, SCREEN_HEIGHT, verticalScale} from '../../commons/sizes';
import {Button, Text} from '../../components';
import {
  Container,
  ImageContainer,
  Image,
  BottomContainer,
  BackgroundCircle1,
  BackgroundCircle2,
} from './styles';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {onboardingActions} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import OnboardingSteps from './onboardingSteps';
import {OnboardingStateType} from '../../reducers/onboarding';
import {StoreType} from '../../reducers';
import {Sizes} from '../../commons';

export const onboardingSteps = {
  GREETINGS: {stepId: 'GREETINGS', height: 0.45, scrollTo: 0},
  LOGIN: {stepId: 'LOGIN', height: 0.58, scrollTo: Sizes.SCREEN_WIDTH},
  SIGNUP: {stepId: 'SIGNUP', height: 0.92, scrollTo: Sizes.SCREEN_WIDTH},
};

export const StartPage = () => {
  const animatedHeight = useSharedValue(0.45);

  const {currentStep}: any = useSelector(
    (store: StoreType) => store.onboarding,
  );

  useEffect(() => {
    currentStep && (animatedHeight.value = currentStep?.height);
    //onsole.log(currentStep);
  }, [currentStep]);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    height: withTiming(SCREEN_HEIGHT * (1 - animatedHeight.value), {
      duration: 400,
    }),
  }));

  const bottomAnimatedStyle = useAnimatedStyle(() => ({
    height: withTiming(SCREEN_HEIGHT * animatedHeight.value, {duration: 400}),
  }));

  const handleStepChange = (step: any) => {
    //console.log(step);
  };

  return (
    <Container behavior="height">
      <BackgroundCircle1 />
      <BackgroundCircle2 />
      <ImageContainer style={[imageAnimatedStyle]}>
        <Image source={require('../../assets/onboard/stydyman/studyman.png')} />
      </ImageContainer>
      <BottomContainer style={[bottomAnimatedStyle]}>
        <OnboardingSteps
          currentStep={currentStep}
          handleStepChange={handleStepChange}
        />
      </BottomContainer>
    </Container>
  );
};
