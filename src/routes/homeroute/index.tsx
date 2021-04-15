import React from 'react';
import {Home} from '../../screens';
import {useDispatch} from 'react-redux';
import {onboardingActions, sessionActions} from '../../actions';
import {onboardingSteps} from '../../screens/startpage';

const HomeRoute = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(onboardingActions.changeStep(onboardingSteps.LOGIN));
    dispatch(sessionActions.LogoutUser());
  };

  return <Home handleLogOut={handleLogOut} />;
};

export default HomeRoute;
