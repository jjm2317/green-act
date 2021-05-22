import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MemberList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  margin: 0;
  list-style: none;
  width: 15.625%;
  margin-right: 20px;
  font-size: 10px;
  .link-box:nth-child(1) {
    margin-right: 1em;
  }
  .link-box > a {
    cursor: pointer;
    padding: 1.5rem;
    vertical-align: middle;
    font-size: 0.8em;
  }
`;
const Member = () => {
  return (
    <MemberList className="member">
      <li>
        <div className="link-box link-box--default">
          <Link to="/Login">로그인</Link>
        </div>
      </li>
      <li>
        <div className="link-box link-box--green">
          <Link to="/Signup">회원가입</Link>
        </div>
      </li>
    </MemberList>
  );
};

export default Member;
