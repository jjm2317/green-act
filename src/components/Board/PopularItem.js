import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    flex-direction: row;
    height: 7.25rem;
    // item이 last 유무( 마지막에 있는지)를 판단해서 밑에 보더 없애기
    border-bottom: ${props => props.last ? '1px #b4df93 solid;': 'none;'}
`

const PopularLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`

const PItemTitle = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    height: 50%;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 2.3rem;
`

const PItemContent = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 2.3rem;
`

const PopularRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
`

const PItemComment = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1.2rem;
    margin-right: 2.8rem;
`

const PItemScrap = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1.2rem;
    margin-right: 2.8rem;
`

const PopularItem = ({title, content, comment, scrap, last}) => {
  return (
    <Item>
      <PopularLeft>
        <PItemTitle>{title}</PItemTitle>
        <PItemContent>{content}</PItemContent>
      </PopularLeft>
      <PopularRight>
        <PItemComment>댓글 {comment}</PItemComment>
        <PItemScrap>스크랩 {scrap}</PItemScrap>
      </PopularRight>
    </Item>
  );
};

export default PopularItem