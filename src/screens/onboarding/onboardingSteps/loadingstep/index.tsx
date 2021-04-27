import {TFunction} from 'i18next';
import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Sizes} from '../../../../commons';
import {fontScale, verticalScale} from '../../../../commons/sizes';
import {Text} from '../../../../components';

interface LoadingStepProps {
  translator: TFunction;
}

export const LoadingStep = ({translator}: LoadingStepProps) => {
  const {primary} = useTheme();
  return (
    <Container>
      <Text
        size={fontScale(25)}
        fontWeight="bold"
        color={primary}
        text={translator('loadingstep.loading')}
      />
    </Container>
  );
};

const Container = styled.View`
  width: ${Sizes.SCREEN_WIDTH}px;
  display: flex;
  align-items: center;
  margin-top: ${verticalScale(20)}px;
`;
