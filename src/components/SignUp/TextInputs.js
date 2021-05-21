import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.div`
  position: relative;
  width: 20.469vw;
  min-width: 280px;
  height: 50px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3em;
  font-weight: 800;
  &::after {
    border-bottom: 1px solid #71bd37;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -99;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }
  label {
    white-space: nowrap;
    width: 80px;
    text-align: right;
    margin: 0 1em 0 0;
    filter: none;
  }
  input {
    order: 2;
    filter: none;
    border: none;
    background: none;
    outline: none;
    height: 80%;
  }
`;

const Label = styled.label`
white-space: nowrap;
width: 80px;
text-align: right;
margin: 0 1em 0 0;
filter: none;
}
`;

const Input = styled.input`
  order: 2;
  filter: none;
  border: none;
  background: none;
  outline: none;
  height: 80%;
`;
const TextInputs = ({ onChange }) => {
  return (
    <>
      <InputBlock className="user-nickname">
        <Label htmlfFor="user-nickname">닉네임</Label>
        <Input
          type="text"
          name="nickName"
          id="user-nickname"
          placeholder="OOOOO"
          required
          onChange={onChange}
        />
      </InputBlock>
      <InputBlock className="user-email">
        <Label htmlfFor="user-email">이메일</Label>
        <Input
          type="email"
          name="email"
          id="user-email"
          placeholder="OOOOO@mail.com"
          required
          onChange={onChange}
        />
      </InputBlock>
      <InputBlock className="user-password">
        <Label htmlfFor="user-password">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="user-password"
          placeholder="********"
          required
          onChange={onChange}
        />
      </InputBlock>
      <InputBlock className="check-user-password">
        <Label htmlfFor="check-user-password">비밀번호 확인</Label>
        <Input
          type="password"
          name="passwordConfirm"
          id="check-user-password"
          placeholder="********"
          required
          onChange={onChange}
        />
      </InputBlock>
    </>
  );
};

export default TextInputs;
