import React from 'react';
import circleNumber from '../../images/circlenumber.png'
import myArticle from '../../images/myarticle.png'
import myScrap from '../../images/myscrap.png'
import myComment from '../../images/mycomment.png'
import styled from 'styled-components';

const PageBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 20rem;
    border-radius: 2rem;
    background-color: white;
    border: 1px solid black;
    margin-bottom: 5rem;
    box-shadow: 3px 3px 3px #999999;
`

const MyArticle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
    height: 33.3%;
`

const MyArticleImage = styled.div `
    width: 4.5rem;
    height: 4.5rem;
    background-image: url(${myArticle});
    background-size: 4.5rem 4.5rem;
    background-repeat: no-repeat;
    margin-right: 3rem;
`
const ArticleNumber = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    background-image: url(${circleNumber});
    background-repeat: no-repeat;
    background-size: 2rem 2.5rem;
    background-position: 1.3rem 1rem;
    margin-left: 3rem;
`
const MyScrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
    height: 33.3%;
`

const MyScrapImage = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    background-image: url(${myScrap});
    background-size: 4.5rem 4.5rem;
    background-repeat: no-repeat;
    margin-right: 4.3rem;
`

const ScrapNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    background-image: url(${circleNumber});
    background-repeat: no-repeat;
    background-size: 2rem 2.5rem;
    background-position: 1.2rem 1rem;
    margin-left: 4.3rem;
`
const MyComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
    height: 33.3%;
`
const MyCommentImage = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    background-image: url(${myComment});
    background-size: 4.5rem 4.5rem;
    background-repeat: no-repeat;
    margin-right: 3rem;
`

const CommentNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    background-image: url(${circleNumber});
    background-repeat: no-repeat;
    background-size: 2rem 2.5rem;
    background-position: 1.3rem 1rem;
    margin-left: 3rem;
`

const MypageBox = ( ) => {
  return (
    <PageBox>
      <MyArticle>
        <MyArticleImage/>
        내가 쓴 글
        <ArticleNumber>n</ArticleNumber>
      </MyArticle>
      <MyScrap>
        <MyScrapImage/>
        스크랩
        <ScrapNumber>n</ScrapNumber>
      </MyScrap>
      <MyComment>
        <MyCommentImage></MyCommentImage>
        댓글 단 글
        <CommentNumber>n</CommentNumber>
      </MyComment>
    </PageBox>
  )
};

export default MypageBox