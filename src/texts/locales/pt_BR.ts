import {Locales} from '.';

const startScreen = {
  steps: {
    greetings: {
      title: 'Use seu smartphone para ajudá-lo a aprender coisas novas.',
      subtitle:
        'Freeanki pode ajudá-lo a fixar conhecimento em sua memória de longo prazo.',
      button: 'INSCREVA-SE AGORA',
      link: 'Já tenho uma conta, entrar agora!',
    },
    login: {
      title: 'Olá, bem-vindo de volta!',
      username: 'Email ou usuário',
      password: 'Senha',
      button: 'ENTRAR',
      link: 'Não tenho uma conta, criar uma agora!',
    },
    signup: {
      title: 'Olá, \nInscreva-se para começar!',
      name: 'Nome completo',
      username: 'Usuário',
      email: 'Email',
      password: 'Senha',
      confirmPassword: 'Confirmação de senha',
      button: 'INSCREVER',
      link: 'Já tenho uma conta, entrar agora!',
    },
  },
};

const pt_BR: Locales = {
  startScreen,
};

export default pt_BR;
