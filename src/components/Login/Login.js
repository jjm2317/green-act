import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <article className="logArticle">
      <div className="badge">
          <img src="/images/logLogo.png" alt="green act" />
      </div>
      <div className="member">
      <form action="/my-handling-form-page" method="post">
        <div className="text-box">
          <label for="mail">이메일&emsp;&nbsp;▶︎</label>
          <input type="email" id="mail" name="user_email" />
        </div>
        <div className="text-box">
          <label for="pwd">비밀번호&nbsp;&nbsp;▶︎</label>
          <input id="pwd" type="password"  name="user_pwd"></input>
        </div>
        <button type="submit">Login</button>
      </form>
     </div>

      {/* 아이디찾기, 비밀번호 찾기 */}

    </article>
 );
};

export default Login;