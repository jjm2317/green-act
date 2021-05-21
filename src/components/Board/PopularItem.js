import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    flex-direction: row;
    height: 7.25rem;
    border-bottom: ${props => props.last ? 'none': '1px #b4df93 solid'};
    border-radius: ${props => props.last ? '0 0 2rem 2rem': 'none'};
    cursor: pointer;
    &:hover{
    background-color: #DCDCDC;
    }
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
    <Item last={last}>
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