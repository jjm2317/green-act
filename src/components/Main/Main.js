import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import './Main.scss';

const Main = ({ children }) => {
  return (
    <main className="appMain">
      <Login></Login>
      {/* <SignUp></SignUp> */}
    </main>
  );
};

export default Main;
