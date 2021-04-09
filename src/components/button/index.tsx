import React from 'react';
import styled from 'styled-components/native';
import {fontScale, horizontalScale, verticalScale} from '../../commons/sizes';
import {Text} from '../text';

interface ButtonProps {
  text: string;
  secondary?: boolean;
  color?: string;
  onPress: any;
  marginTop?: number;
  marginBottom?: number;
  width?: number;
}

export const Button = (props: ButtonProps) => (
  <StyledButton {...props}>
    <Text fontWeight="bold" color="#FFFFFF" text={props.text} />
  </StyledButton>
);

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  ${({width}) =>
    width ? `width: ${horizontalScale(width)}px` : `width: 100%`};
  height: ${verticalScale(47)}px;
  border-radius: ${fontScale(8)}px;
  justify-content: center;
  align-items: center;
  background: ${({secondary, theme, color}) =>
    color ? color : secondary ? theme.secondary : theme.primary};
`;
