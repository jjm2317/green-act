import React from 'react';
import './BoardMain.scss';
import Board from './Board';
import MypageBox from './MypageBox';
import CategoryBox from './CategoryBox';
import styled from 'styled-components';
import BoardForm from './BoardForm';

const Main = styled.div`
    max-width: 1000px;
    min-width: 600px;
    width: 100%;
    height: 80rem;
    display: flex;
    flex-direction: column;
`

const Top = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


const Left = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Right = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80%;
    margin-top: 4rem;
`

const BoardMain = () => {
  return (
    <Main>
      <Top>
        <BoardForm/>
      </Top>
      <Bottom>
        <Left>
          <Board title={"인기"}/>
          <Board title={"최근"}/>
        </Left>
        <Right>
          <MypageBox/>
          <CategoryBox/>
        </Right>
      </Bottom>
    </Main>
  );
};

export default BoardMain