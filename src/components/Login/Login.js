import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <section className="login">
      <h2 className="login-logo">
        <img src="/images/logLogo.png" alt="green act" />
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
