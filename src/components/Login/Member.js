import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <Link to="#">아이디 찾기</Link>
      </li>
      <span className="divider" aria-hidden="true">
        |
      </span>
      <li>
        <Link to="#">비밀번호 찾기</Link>
      </li>
    </MemberOptions>
  );
};

export default Member;
