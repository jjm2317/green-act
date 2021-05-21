import React from 'react';
import styled from 'styled-components';
import LoginTemplate from './LoginTemplate';
import Member from './Member';

const Fieldset = styled.fieldset`
  border: none;
  margin-top: 10px;
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

const Login = ({ type, form, onChange, onSubmit }) => {
  return (
    <LoginTemplate>
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
      <Member />
    </LoginTemplate>
  );
};

export default Login;
