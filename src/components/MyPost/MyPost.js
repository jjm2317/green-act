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
        <span className="navType"> ▾</span>
        <span className="navModi"> 편집</span>
      </div>

     <div className="post">
        <span className="myPost">분리배출Tip</span>
        <span className="myPost">게시글 첫 줄....</span>
        <span className="myPost">수정</span>
     </div>
     <div className="post">
        <a className="myPost">분리배출Tip</a>
     </div>
     <div className="post">
        <span className="myPost">분리배출Tip</span>
     </div>

     
    </article>
    
 );
};

export default MyPost;