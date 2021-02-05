import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <article className="signArticle">
      <h2 className="title" >회원가입</h2>
      <div className="member">
      <form action="/my-handling-form-page" method="post">
        <div>
          <label for="name">닉네임&emsp;&nbsp;&nbsp;▶︎</label>
          <input type="text" id="name" name="user_nickname" />
        </div>
        <div>
          <label for="mail">이메일&emsp;&nbsp;&nbsp;▶︎</label>
          <input type="email" id="mail" name="user_email" />
        </div>
        <div>
          <label for="pwd">비밀번호&emsp;&nbsp;&nbsp;▶︎</label>
          <input id="pwd" type="password"  name="user_pwd"></input>
        </div>
        <div>
          <label for="pwd">비밀번호 확인&emsp;&nbsp;▶︎</label>
          <input id="pwd" type="password" name="user_pwd_check"></input>
        </div>
        <button type="submit">완료</button>
      </form>
     </div>

      {/* 관심종목 */}

    </article>
 );
};

export default Signup;