import React from 'react';

import Logo from '@src/assets/svgs/logo.svg';

import { Container } from './styles';

const LoginView: React.FC = () => {
  return (
    <Container>
      <Logo color="#fff" width={106} height={127} />
    </Container>
  );
};

export default LoginView;
