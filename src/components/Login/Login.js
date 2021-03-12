import React from 'react';
import './Login.scss';

const Login = ({ type, form, onChange, onSubmit }) => {
  console.log(form, onSubmit, type);
  console.log(onChange);
  return (
    <section className="login">
      <h2 className="login-logo">
        <img src="/images/logLogo.png" alt="green act" />
      </h2>
      <form onSubmit={onSubmit} className="login-form" method="POST">
        <fieldset>
          <legend>회원 로그인 폼</legend>
          <div className="user-email">
            <label htmlFor="user-email">이메일</label>
            <input
              type="email"
              name="username"
              id="user-email"
              placeholder="OOOOO@mail.com"
              required
              onChange={onChange}
              value={form.username}
            />
          </div>
          <div className="user-password">
            <label htmlFor="user-password">비밀번호</label>
            <input
              type="password"
              name="password"
              id="user-password"
              placeholder="********"
              required
              onChange={onChange}
              value={form.password}
            />
          </div>
          <button className="link-box link-box--green" type="submit">
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
