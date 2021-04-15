import React from 'react';
import {StartPage} from '../../screens';
import {sessionActions} from '../../actions';
import {useDispatch} from 'react-redux';

export default function StartRoute() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    setTimeout(() => dispatch(sessionActions.LoginUser()), 2500);
  };

  return <StartPage handleLogin={handleLogin} />;
}
