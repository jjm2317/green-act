import React from 'react';
import './MyPost.scss';

const MyPost = () => {
  return (
    <article className="myArticle3">
      <div className="badge">
        <a href="#" ><img src="/images/Mypage/profile.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypage.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypageBookmark.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/pencilFocus.png" alt="green act" /></a>
        <div><br/></div>
      </div>

      
      <div className="nav">
        <span>카테고리 - </span>
        <span>전체</span>
        <span className="navType">&nbsp;&nbsp;▾</span>
      </div>

     <div className="post">
        <a className="postCate">게시판 카테고리</a>
        <a className="postTitle">게시글 제목(이미지 있으면 같이 나오게 하기)</a>
        {/* 수정 칸은 게시글페이지에만 있어도 될듯하여 일단 뺴두었음 */}
     </div>
     <div className="post">
        <a className="postCate">분리배출Tip</a>
        <a className="postTitle">유리병 분리배출시 세척방법이 궁금해요</a>
     </div>
     <div className="post">
        <a className="postCate">분리배출Tip</a>
        <a className="postTitle">유리병 분리배출시 세척방법이 궁금해요</a>
        <a className="postImg">이미지</a>
        <a className="postImg">이미지</a>
     </div>

     
    </article>
    
 );
};

export default MyPost;