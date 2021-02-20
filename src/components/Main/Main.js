import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Bestboard from './Bestboard';
import Category from './Category';
import './Main.scss';
import Recycle from './Recycle';
import Search from './Search';

const Main = ({ children }) => {
  return (
    <main className="appMain">
      <Search />
      <Category />
      <Recycle />
      <Bestboard />
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
    </main>
  );
};

export default Main;
