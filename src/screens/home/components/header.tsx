import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../commons';
import {horizontalScale, verticalScale} from '../../../commons/sizes';
import Image from 'react-native-fast-image';

const avatarUri = 'https://randomuser.me/api/portraits/women/95.jpg';

export default function Header() {
  return (
    <Container style={{paddingHorizontal: horizontalScale(20)}}>
      <UserPicture source={{uri: avatarUri}} />
    </Container>
  );
}

const Container = styled.View`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${verticalScale(70)}px;
  flex-direction: row;
  align-items: center;
`;

const USER_PIC_SIZE = verticalScale(40);

const UserPicture = styled(Image)`
  width: ${USER_PIC_SIZE}px;
  height: ${USER_PIC_SIZE}px;
  border-radius: ${USER_PIC_SIZE / 2}px;
`;
