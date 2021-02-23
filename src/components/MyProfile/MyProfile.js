import React from 'react';
import './MyProfile.scss';

const MyProfile = () => {
  return (
    <article className="myArticle1">
      <div className="badge">
        <a href="#" ><img src="/images/Mypage/mypageMy.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypage.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypageBookmark.png" alt="green act" /></a>
        <a href="#" ><img src="/images/Mypage/mypagePencil.png" alt="green act" /></a>
        <div><br/></div>
      </div>

      {/*가로정렬*/}
      <div className="profile">      
        <img src="/images/Mypage/mypageLogo.png" alt="green act"/>
        <div className="introduc">
                <div className="info">
                    <span className="nick>">Nich name</span>
                    <div>greenact@gmail.com</div>
                    <div>********</div>
                </div>
                <br/>
                <div className="interest">
                    <span className="inter>">관심있는 분야</span>
                    <div>#분리수거</div>
                    <div>#재활용</div>
                </div>
        </div>
    </div>
        <div className="profileButton">
            <button type="submit">프로필 정보 수정하기</button>
        </div>
    </article>
    
 );
};

export default MyProfile;