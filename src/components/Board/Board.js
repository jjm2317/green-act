import React from 'react';
import PopularItemList from './PopularItemList';
import styled from 'styled-components';
import moreButton from '../../images/more_button.png'

const BigBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 20rem;
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
`


const Board = ({title}) => {
  return (
    <BigBoard>
      <HeadLine>
        <Title>{title} 게시물</Title>
        <More>더보기</More>
      </HeadLine>
      <PopularItemList/>
    </BigBoard>
  )
};

export default Board