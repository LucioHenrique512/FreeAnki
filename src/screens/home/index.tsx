import React from 'react';
import {Button} from '../../components';
import {Container} from './styles';

interface HomeProps {
  handleLogOut(): void;
}

export const Home = ({handleLogOut}: HomeProps) => {
  return (
    <Container>
      <Button marginTop={100} text="Logout" onPress={() => handleLogOut()} />
    </Container>
  );
};
