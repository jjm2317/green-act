import React from 'react';
import './SignUp.scss';

const SignUp = ({ type, form, onChange, onSubmit }) => {
  console.log(form);
  return (
    <section className="signup">
      <h2 className="signup-heading">회원가입</h2>
      <form action="#" className="signup-form" onSubmit={onSubmit}>
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="user-nickname">
            <label htmlFor="user-nickname">닉네임</label>
            <input
              type="text"
              name="nickname"
              id="user-nickname"
              placeholder="OOOOO"
              onChange={onChange}
              value={form.nickname}
              required
            />
          </div>
          <div className="user-email">
            <label htmlFor="user-email">이메일</label>
            <input
              type="email"
              name="username"
              id="user-email"
              placeholder="OOOOO@mail.com"
              onChange={onChange}
              value={form.username}
              required
            />
          </div>
          <div className="user-password">
            <label htmlFor="user-password">비밀번호</label>
            <input
              type="password"
              name="password"
              id="user-password"
              placeholder="********"
              onChange={onChange}
              value={form.password}
              required
            />
          </div>
          <div className="check-user-password">
            <label htmlFor="check-user-password">비밀번호 확인</label>
            <input
              type="password"
              name="passwordConfirm"
              id="check-user-password"
              placeholder="********"
              onChange={onChange}
              value={form.passwordConfirm}
              required
            />
          </div>
          <div className="user-interests">
            <label htmlFor="check-user-password">관심분야</label>
            <input
              type="radio"
              name="interest"
              id="check-user-password"
              placeholder="********"
              onChange={onChange}
              value={form.interests}
              required
            />
          </div>
          <button className="link-box link-box--green" type="submit">
            완료
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

export default SignUp;
