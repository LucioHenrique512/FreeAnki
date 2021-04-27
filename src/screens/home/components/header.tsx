import React from 'react';
import styled from 'styled-components/native';
import {Sizes} from '../../../commons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../commons/sizes';
import Image from 'react-native-fast-image';
import {Text} from '../../../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components';

const avatarUri = 'https://randomuser.me/api/portraits/women/95.jpg';

export default function Header() {
  const {secondary_text} = useTheme();
  return (
    <Container style={{paddingHorizontal: horizontalScale(20)}}>
      <UserContainer>
        <UserPicture source={{uri: avatarUri}} />
        <Text fontWeight="bold" text={'Hello, '} />
        <Text text={'Fulana de tals'} />
      </UserContainer>
      <ConfigButton>
        <FontAwesome5
          color={secondary_text}
          size={fontScale(21)}
          name={'cog'}
        />
      </ConfigButton>
    </Container>
  );
}

const Container = styled.View`
  width: ${Sizes.SCREEN_WIDTH}px;
  height: ${verticalScale(70)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const USER_PIC_SIZE = verticalScale(40);

const UserPicture = styled(Image)`
  width: ${USER_PIC_SIZE}px;
  height: ${USER_PIC_SIZE}px;
  background-color: ${({theme}) => theme.primary};
  border-radius: ${USER_PIC_SIZE / 2}px;
  margin-right: ${verticalScale(15)}px;
  border: 2px;
  border-color: ${({theme}) => theme.primary};
`;

const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ConfigButton = styled.TouchableOpacity`
  height: ${horizontalScale(25)}px;
  width: ${horizontalScale(25)}px;
  justify-content: center;
  align-items: center;
`;
