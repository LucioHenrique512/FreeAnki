import React from 'react';
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
import {useDispatch} from 'react-redux';
import OnboardingSteps from './onboardingSteps';

export const StartPage = () => {
  const {changeStep} = onboardingActions;
  const animatedHeight = useSharedValue(0.45);
  const dispatch = useDispatch();

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    height: withTiming(SCREEN_HEIGHT * (1 - animatedHeight.value), {
      duration: 300,
    }),
  }));

  const bottomAnimatedStyle = useAnimatedStyle(() => ({
    height: withTiming(SCREEN_HEIGHT * animatedHeight.value, {duration: 300}),
  }));

  const testAnimation = () => {
    dispatch(changeStep('GREETINGS'));
  };

  return (
    <Container>
      <BackgroundCircle1 />
      <BackgroundCircle2 />
      <ImageContainer style={[imageAnimatedStyle]}>
        <Image source={require('../../assets/onboard/stydyman/studyman.png')} />
      </ImageContainer>
      <BottomContainer style={[bottomAnimatedStyle]}>
        <OnboardingSteps />
      </BottomContainer>
    </Container>
  );
};
