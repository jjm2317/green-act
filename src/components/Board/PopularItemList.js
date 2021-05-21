import React from 'react';
import PopularItem from './PopularItem';
import styled from 'styled-components';

const List = styled.div`
    width: 100%;
    height: 14.5rem;
`
const PopularItemList = () => {
  return (
    <List>
      {/* 인기 게시물 item 목록 */}
      <PopularItem title="제목" content="내용" comment="5" scrap="10" last={false}/>
      <PopularItem title="제목2" content="내용2" comment="10" scrap="5" last={false}/>
      <PopularItem title="제목3" content="내용3" comment="13" scrap="2" last={true}/>
    </List>
  );
};

export default PopularItemList