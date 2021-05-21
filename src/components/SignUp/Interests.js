import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  width: 20.469vw;
  min-width: 330px;
  height: 50px;
  border-left: 1px solid #71bd37;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #71bd37;
  border-radius: 30px 0 0 30px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.1em;
  font-weight: 600;
  padding-top: 0.8em;
  margin: 0;
  &::before {
    content: '관심있는 분야';
    position: absolute;
    top: -7px;
    left: 25px;
    width: 70px;
    height: 20px;
  }
  input + label {
    white-space: nowrap;
    color: #00000087;
    width: 100px;
    height: 30px;
    text-align: center;
    margin: auto 1em;
    line-height: 30px;
    vertical-align: middle;
    cursor: pointer;
  }
  input + label:hover {
    background: #71bd37;
    color: #fffefe;
    transition: 0.5s;
    border-radius: 30px;
  }
  input:checked + label {
    white-space: nowrap;
    color: #fffefe;
    width: 100px;
    height: 30px;
    border-radius: 15px;
    background: #71bd37;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    margin: 0 1em;
  }

  input {
    display: none;
  }
`;

const Interests = ({ onChange }) => {
  return (
    <Fieldset className="user-interests">
      {/* <legend>관심있는 분야</legend> */}
      {/* {checkBoxList.map(({ id, name, content }) => ( */}
      <input type="checkbox" id="separate" name="separate" />
      <label for="separate">분리수거</label>
      <input type="checkbox" id="campaign" name="campaign" />
      <label for="campaign">캠페인</label>
      <input type="checkbox" id="news" name="news" />
      <label for="news">뉴스</label>
      <input type="checkbox" id="recycle" name="recycle" />
      <label for="recycle">재활용</label>
      <input type="checkbox" id="community" name="community" />
      <label for="community">커뮤니티</label>
    </Fieldset>
  );
};

export default Interests;
