import React from 'react';
import styled from 'styled-components';
import CategoryRecycle from '../../images/category-recycle.png';
import CategoryCampaign from '../../images/category-campaign.png'
import CategoryNews from '../../images/category-news.png'
import CategoryRecycle2 from '../../images/category-recycle2.png'

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

const Item = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #000000;
    font-size: 1.3rem;
    font-weight: bold;
`

const ItemRecycle = styled(Item)`
    background-image: url(${CategoryRecycle});
    background-repeat: no-repeat;
    background-position: 1rem -0.1rem;
    &:hover{
    background-color: #DCDCDC;
    }
    cursor: pointer;
`

const ItemCampaign = styled(Item)`
    background-image: url(${CategoryCampaign});
    background-repeat: no-repeat;
    background-position: 2.5rem 1rem;
    &:hover{
    background-color: #DCDCDC;
    }
    cursor: pointer;
`
const ItemNews = styled(Item)`
    background-image: url(${CategoryNews});
    background-repeat: no-repeat;
    background-position: 4.2rem 1.4rem;
    &:hover{
    background-color: #DCDCDC;
    }
    cursor: pointer;
`
const ItemWasteSorting = styled(Item)`
    background-image: url(${CategoryRecycle2});
    background-repeat: no-repeat;
    background-position: 4rem 1.4rem;
    border-bottom: none;
    border-radius: 0 0 2rem 2rem;
    &:hover{
    background-color: #DCDCDC;
    }
    cursor: pointer;
`

const CategoryBox = () => {
  return (
    <Category>
      <HeadLine>
        <Title>카테고리</Title>
      </HeadLine>
      <ItemList>
        <ItemRecycle>재활용</ItemRecycle>
        <ItemCampaign>캠페인</ItemCampaign>
        <ItemNews>뉴스</ItemNews>
        <ItemWasteSorting>분리수거</ItemWasteSorting>
      </ItemList>
    </Category>
  )
}

export default CategoryBox