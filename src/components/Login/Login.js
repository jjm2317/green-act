import React from 'react';
import styled from 'styled-components';
import './Login.scss';

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

const Fieldset = styled.fieldset`
  border: none;
  margin-top: 10px;
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

const InputBlock = styled.div`
  width: 20.469vw;
  min-width: 300px;
  height: 50px;
  border: 1px solid #71bd37;
  border-radius: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3em;
  font-weight: 800;
  margin-bottom: ${(props) => (props.end ? '4vh' : '0')};
  & + & {
    margin-top: 1vh;
  }
  &::before {
    content: '';

    display: ${(props) => (props.triArrow ? 'block' : 'none')};

    order: 1;
    margin: 0 1em;
    width: 0px;
    height: 0px;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 14px solid transparent;
    border-left: 14px solid #71bd37;
  }
`;

const Label = styled.label`
  margin-left: 1.5vw;
  white-space: nowrap;
  width: 80px;
  text-align: center;
`;

const Input = styled.input`
  order: 2;
  border: none;
  background: none;
`;

const Button = styled.button`
  width: 20.469vw;
  min-width: 300px;
  text-align: center;
  border: none;
`;

const MemberOptions = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  li:nth-child(1) {
    margin-left: -2vw;
  }
  .divider {
    display: inline-block;
    margin: 0 1vw;
  }
`;

const Login = ({ type, form, onChange, onSubmit }) => {
  return (
    <LoginWrap>
      <LoginLogo className="login-logo">
        <LogoImg src="/images/logLogo.png" alt="green act" />
      </LoginLogo>
      <form onSubmit={onSubmit} className="login-form" method="POST">
        <Fieldset>
          <legend>회원 로그인 폼</legend>

          <InputBlock triArrow>
            <Label htmlFor="user-email">이메일</Label>
            <Input
              type="email"
              name="username"
              id="user-email"
              placeholder="OOOOO@mail.com"
              required
              onChange={onChange}
              value={form.username}
            />
          </InputBlock>
          <InputBlock end triArrow>
            <Label htmlFor="user-password">비밀번호</Label>
            <Input
              type="password"
              name="password"
              id="user-password"
              placeholder="********"
              required
              onChange={onChange}
              value={form.password}
            />
          </InputBlock>
          <Button className="link-box link-box--green" type="submit">
            LOGIN
          </Button>
        </Fieldset>
      </form>
      <MemberOptions className="member-option">
        <li>
          <a>아이디 찾기</a>
        </li>
        <span className="divider" aria-hidden="true">
          |
        </span>
        <li>
          <a>비밀번호 찾기</a>
        </li>
      </MemberOptions>
    </LoginWrap>
  );
};

export default Login;
