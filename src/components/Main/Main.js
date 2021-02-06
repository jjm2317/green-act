import React from 'react';
import Login from '../Login/Login';
import './Main.scss';

const Main = ({ children }) => {
  return (
    <main className="appMain">
      <Login></Login>
    </main>
  );
};

export default Main;
