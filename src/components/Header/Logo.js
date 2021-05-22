import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className="logo">
      <Link to="/">
        <img src="/images/logo.png" alt="green Act" />
      </Link>
    </h1>
  );
};

export default Logo;
