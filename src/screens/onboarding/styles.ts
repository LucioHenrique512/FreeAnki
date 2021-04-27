import styled from 'styled-components/native';
import {Sizes} from '../../commons';
import {verticalScale} from '../../commons/sizes';
import Animated from 'react-native-reanimated';

export const Container = styled.KeyboardAvoidingView`
  height: ${Sizes.SCREEN_HEIGHT}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  background: ${({theme}) => theme.primary};
  position: relative;
  align-items: center;
`;

// height manipulated from reanimated
export const ImageContainer = styled(Animated.View)`
  height: ${0}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  resize-mode: contain;
  height: 100%;
  width: 100%;
`;

// height manipulated from reanimated
export const BottomContainer = styled(Animated.View)`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${0}px;
  background: ${({theme}) => theme.foreground};
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  elevation: 100;
`;

const CIRCLE_SIZE = verticalScale(877);

export const BackgroundCircle1 = styled.View`
  position: absolute;
  bottom: -45%;
  height: ${CIRCLE_SIZE}px;
  width: ${CIRCLE_SIZE}px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: ${CIRCLE_SIZE / 2}px;
`;

export const BackgroundCircle2 = styled.View`
  position: absolute;
  bottom: -60%;
  height: ${CIRCLE_SIZE}px;
  width: ${CIRCLE_SIZE}px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: ${CIRCLE_SIZE / 2}px;
`;
