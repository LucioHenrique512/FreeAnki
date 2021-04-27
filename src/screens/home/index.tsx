import React from 'react';
import {Button} from '../../components';
import {Container} from './styles';
import Header from './components/header';

interface HomeProps {
  handleLogOut(): void;
}

export const Home = ({handleLogOut}: HomeProps) => {
  return (
    <Container>
      <Header onPressSetings={() => handleLogOut()} />
    </Container>
  );
};
