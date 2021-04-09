import React from 'react';
import styled, {useTheme} from 'styled-components/native';
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
  linkStyle?: boolean;
  textSize?: number;
  underline?: boolean;
}

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <StyledButton {...props}>
      <Text
        fontWeight="bold"
        textDecoration={props.underline ? 'underline' : 'none'}
        color={props.linkStyle ? theme.secondary_text : '#FFFFFF'}
        text={props.text}
      />
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  ${({width}) =>
    width ? `width: ${horizontalScale(width)}px` : `width: 100%`};
  ${({linkStyle}) => `height:${linkStyle ? 'auto' : `${verticalScale(47)}px`}`};
  border-radius: ${fontScale(8)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${({marginTop}) => (marginTop ? verticalScale(marginTop) : 0)}px;
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? verticalScale(marginBottom) : 0}px;
  background: ${({secondary, theme, color, linkStyle}) =>
    linkStyle
      ? 'transparent'
      : color
      ? color
      : secondary
      ? theme.secondary
      : theme.primary};
`;
