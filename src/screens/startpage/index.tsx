import React, {useState} from 'react';
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
import {localizedText} from '../../texts';
import {consoleLog} from '../../utils';
import {onboardingActions} from '../../actions';
import {useDispatch} from 'react-redux';

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
    // setToggleAnim(!toggleAnim);
    // animatedHeight.value = toggleAnim ? 0.6 : 0.45;
    //consoleLog('RN-LOG', 'Apertei');
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
        <Text
          size={fontScale(20)}
          text={localizedText('startScreen.steps.start.title')}
          textAlign="left"
          fontWeight="bold"
          marginBottom={verticalScale(22)}
        />
        <Text
          size={fontScale(12)}
          text={localizedText('startScreen.steps.start.subtitle')}
          textAlign="left"
          secondary
          marginBottom={verticalScale(22)}
        />
        <Button
          text={localizedText('startScreen.steps.start.button')}
          onPress={testAnimation}
        />
        <Button
          text={localizedText('startScreen.steps.start.link')}
          onPress={testAnimation}
          linkStyle
          underline
          marginTop={15}
        />
      </BottomContainer>
    </Container>
  );
};
