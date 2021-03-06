import React from 'react';
import PopularItem from './PopularItem';
import styled from 'styled-components';

const List = styled.div`
    width: 100%;
    height: 14.5rem;
`
const RecentItemList = () => {
  return (
    <List>
      {/* 최근게시물 item 목록 */}
      <PopularItem title="최근게시물" content="내용" comment="4" scrap="16" last={false}/>
      <PopularItem title="최근2" content="내용2" comment="12" scrap="10" last={false}/>
      <PopularItem title="최근3" content="내용3" comment="8" scrap="2" last={true}/>
    </List>
  );
};

export default RecentItemList