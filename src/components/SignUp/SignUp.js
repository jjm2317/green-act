import React, { useRef } from 'react';
import styled from 'styled-components';
import AuthWrap from '../styled/auth/AuthWrap';
import { Button } from '../styled/auth/Button';
import Interests from './Interests';
import Member from './Member';
import TextInputs from './TextInputs';

const Heading = styled.h2`
  font-size: 2.5em;
  color: #1d4c23;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  height: 360px;
  align-items: center;
  border: none;
`;

const SignUp = ({ form, onChange, onSubmit }) => {
  const interestsRef = useRef();
  return (
    <AuthWrap className="signup">
      <Heading>회원가입</Heading>
      <form onSubmit={onSubmit} class="signup-form">
        <Fieldset>
          <legend>회원가입 폼</legend>
          <TextInputs onChange={onChange} />
          <Interests interestsRef={interestsRef} onChange={onChange} />
          <Button className="link-box link-box--green" type="submit">
            완료
          </Button>
        </Fieldset>
      </form>
      <Member />
    </AuthWrap>
  );
};

export default SignUp;
