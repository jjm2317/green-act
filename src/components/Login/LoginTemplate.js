import React from 'react';
import styled from 'styled-components';

const LoginWrap = styled.section`
  width: 91.667%;
  min-width: 1000px;
  max-width: 1920px;
  height: 800px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

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
    <LoginWrap>
      <LoginLogo className="login-logo">
        <LogoImg src="/images/logLogo.png" alt="green act" />
      </LoginLogo>
      {children}
    </LoginWrap>
  );
};

export default LoginTemplate;
