import React from 'react';
import './Login.scss';

const Login = () => {
  return (
<<<<<<< HEAD
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
=======
    <section className="login">
      <h2 className="login-logo">
        <img src="/images/loginLogo.png" alt="green act" />
      </h2>
      <form action="#" class="login-form" method="POST">
        <fieldset>
          <legend>회원 로그인 폼</legend>
          <div className="user-email">
            <label for="user-email">이메일</label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="OOOOO@mail.com"
              required
            />
          </div>
          <div className="user-password">
            <label for="user-password">비밀번호</label>
            <input
              type="password"
              name="user-password"
              id="user-password"
              placeholder="********"
              required
            />
          </div>
          <button className="link-box link-box--green" type="submmit">
            LOGIN
          </button>
        </fieldset>
      </form>
      <ul className="member-option">
        <li>
          <a>아이디 찾기</a>
        </li>
        <span className="divider" aria-hidden="true">
          |
        </span>
        <li>
          <a>비밀번호 찾기</a>
        </li>
      </ul>
    </section>
  );
};

export default Login;
>>>>>>> 209465366ae3c9ea2b6606581daa71085ba1b8e8
