import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="appFooter">
      <div className="badge">
        <img src="/images/footerLogo.png" alt="green act" />
      </div>
      <address className="address">
        <span>(주)purple code</span>
        <span>greenact@purplecode.com</span>
      </address>
      <ul className="guide__list">
        <li>
          <a href="#">문의하기</a>
        </li>
        <li>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <a href="#">이용약관</a>
        </li>
        <li>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <a href="#">개인정보취급방침</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
