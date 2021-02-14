import React from 'react';
import './MyBoookmark.scss';

const MyProfile = () => {
  return (
    <article className="myArticle2">
      <div className="badge">
        <a href="#" ><img src="/images/Mypage/profile.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypage.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/bookmarkFocus.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypagePencil.png" alt="green act" /></a>
        <div><br/></div>
      </div>

      
      <div className="nav">
        <div></div>      
        <a className="navPost">게시판</a>
        <a>뉴스</a>
        <a>캠페인</a>

        </div>

     <div className="bookmark">
        <a className="bookmarkPost">게시물 칸</a>
        <a className="bookmarkPost">게시물 칸</a>
        <a className="bookmarkPost">게시물 칸</a>
        <a className="bookmarkPost">게시물 칸</a>
        <a className="bookmarkPost">게시물 칸</a>
        <a className="bookmarkPost">게시물 칸</a>
     </div>

     
    </article>
    
 );
};

export default MyProfile;