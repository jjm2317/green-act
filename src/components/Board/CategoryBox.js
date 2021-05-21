import React from 'react';
import styled from 'styled-components';

const Category = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 35rem;
    border-radius: 2rem;
    background-color: white;
    border: 1px solid black;
    box-shadow: 3px 3px 3px #999999;
`
const HeadLine = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    align-items: center;
    border-bottom: 3px solid #000000;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    margin-top: 1.2rem;
`

const ItemList = styled.div`
    width:100%;
    height:85%;
    display: flex;
    flex-direction: column;
`

const item = styled.div`
    
`

const CategoryBox = () => {
  return (
    <Category>
      <HeadLine>
        <Title>카테고리</Title>
      </HeadLine>
      <ItemList>
        <div className="item item-recycle">재활용</div>
        <div className="item item-campaign">캠페인</div>
        <div className="item item-news">뉴스</div>
        <div className="item item-wasteSorting">분리수거</div>
      </ItemList>
    </Category>
  )
}

export default CategoryBox