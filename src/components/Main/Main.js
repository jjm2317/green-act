import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Bestboard from './Bestboard';
import './Main.scss';
import Search from './Search';

const Main = ({ children }) => {
  return (
    <main className="appMain">
      <Search />
      <Bestboard />
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
    </main>
  );
};

export default Main;
