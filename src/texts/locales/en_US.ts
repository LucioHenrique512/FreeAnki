import {Locales} from '.';

const startScreen = {
  steps: {
    greetings: {
      title: 'Use your smartphone to help you learn new things.',
      subtitle: 'Freeanki can help you fix knowledge in your long-term memory.',
      button: 'SIGN UP NOW',
      link: 'I already have a user account, sign in now!',
    },
    login: {
      title: 'Hello, Wellcome back!',
      username: 'Username or Email',
      password: 'Password',
      button: 'SIGNIN',
      link: "I don't have an account, sign up now!",
    },
    signup: {
      title: 'Hello,\nSign up to get start!',
      name: 'Full name',
      username: 'Username',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirme Password',
      button: 'SIGNUP',
      link: 'I already have a user account, sign in now!',
    },
  },
};

const en_US: Locales = {
  startScreen: startScreen,
};

export default en_US;
