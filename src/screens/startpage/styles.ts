import styled from 'styled-components/native';
import {Sizes} from '../../commons';

export const Container = styled.View`
  height: ${Sizes.SCREEN_HEIGHT}px;
  width: ${Sizes.SCREEN_WIDTH}px;
  background: ${({theme}) => theme.primary};
`;
