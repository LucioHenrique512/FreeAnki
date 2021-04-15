export const SessionActions = {
  SESSION_LOGIN_USER: 'SESSION_LOGIN_USER',
  SESSION_LOGOUT_USER: 'SESSION_LOGOUT_USER',
};

export const LoginUser = () => ({type: SessionActions.SESSION_LOGIN_USER});

export const LogoutUser = () => ({type: SessionActions.SESSION_LOGOUT_USER});
