import React from 'react';
import PopularItemList from './PopularItemList';
import styled from 'styled-components';
import moreButton from '../../images/more_button.png'
import RecentItemList from './RecentItemList';

const BigBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 30rem;
    background-color: white;
    border-radius: 2rem;
    border: 1px solid #71bd37;
    margin-bottom: 5rem;
    box-shadow: 3px 3px 3px #999999;
`

const HeadLine = styled.div`
    display: flex;
    width: 100%;
    height: 5.5rem;
    align-items: center;
    border-bottom: 3px solid #71bd37;
    background-image: url('${moreButton}');
    background-repeat: no-repeat;
    background-position: 46rem 2.5rem;
    background-size: 1rem;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    width: 80%;
    margin-left: 2rem;
    margin-top: 1.2rem;
`
const More = styled.button`
    width: 20%;
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-right: 1.5rem;
    margin-top: 1.2rem;
    font-size: 1.1rem;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
     color: #f00;
    }
`


const Board = ({title}) => {
    {/* 타이틀이 '인기'면 PopularItemList로, 타이틀이 '최근'이면 RecentItemList로 */}
    if (title == "인기") {
      return (
        <BigBoard>
          <HeadLine>
            <Title>{title} 게시물</Title>
            <More>더보기</More>
          </HeadLine>
          <PopularItemList/>
        </BigBoard>
      );
    } else if (title == "최근") {
      return (
        <BigBoard>
          <HeadLine>
            <Title>{title} 게시물</Title>
            <More>더보기</More>
          </HeadLine>
          <RecentItemList/>
        </BigBoard>
        );
    }
};

export default Board