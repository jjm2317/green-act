import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <section className="signup">
      <h2 className="signup-heading">회원가입</h2>
      <form action="#" class="signup-form" method="POST">
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="user-nickname">
            <label for="user-nickname">닉네임</label>
            <input
              type="text"
              name="user-nickname"
              id="user-nickname"
              placeholder="OOOOO"
              required
            />
          </div>
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
          <div className="check-user-password">
            <label for="check-user-password">비밀번호 확인</label>
            <input
              type="password"
              name="check-user-password"
              id="check-user-password"
              placeholder="********"
              required
            />
          </div>
          <fieldset className="user-interests">
            <legend>관심있는 분야</legend>
            <label for="check-user-password">관심분야</label>
            <input
              type="radio"
              name="check-user-password"
              id="check-user-password"
              placeholder="********"
              required
            />
          </fieldset>
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
