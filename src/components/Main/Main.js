import React from 'react';
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';
import Bestboard from './Bestboard';
import Category from './Category';
import './Main.scss';
import News from './News';
import Recycle from './Recycle';
import Search from './Search';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <Router>
    <main className="appMain">
      <Search />
      <Category />
      <Recycle />
      <Bestboard />
      <News />
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}

    </main>
    </Router>
  );
};

export default Main;
