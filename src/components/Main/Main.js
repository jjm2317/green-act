import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import './Main.scss';
import Search from './Search';

const Main = ({ children }) => {
  return (
    <main className="appMain">
      <Search />
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
    </main>
  );
};

export default Main;
