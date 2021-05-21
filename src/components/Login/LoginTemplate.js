import React from 'react';
import styled from 'styled-components';
import AuthWrap from '../styled/auth/AuthWrap';

const LoginLogo = styled.h2`
  margin-bottom: 3vh;
`;
const LogoImg = styled.img`
  max-width: 200px;
  min-width: 180px;
  max-height: 80px;
  width: 10.417vw;
  display: block;
`;

const LoginTemplate = ({ children }) => {
  return (
    <AuthWrap>
      <LoginLogo className="login-logo">
        <LogoImg src="/images/logLogo.png" alt="green act" />
      </LoginLogo>
      {children}
    </AuthWrap>
  );
};

export default LoginTemplate;
