import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <article className="logArticle">
      <div className="badge">
          <img src="/images/logLogo.png" alt="green act" />
      </div>
      <div className="member">
        <p>이메일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶︎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="id" value="" 
              autocomplete="off" autofocus/>
        </p>
        <p>비밀번호&nbsp;&nbsp;&nbsp;▶︎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" name="pwd" value="12345" 
              autocomplete="off" autofocus/>
        </p>
        <form><button type="submit" name="login_succ">로그인</button></form>
      </div>

      {/* 아이디찾기, 비밀번호 찾기 */}

    </article>
 );
};

export default Login;