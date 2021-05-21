import React from 'react';
import styled from 'styled-components';

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

const Member = () => {
  return (
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
  );
};

export default Member;
