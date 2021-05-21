import React from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Bestboard from './Bestboard';
import Category from './Category';
import './Main.scss';
import News from './News';
import Recycle from './Recycle';
import Search from './Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    // <Router>
    <main className="appMain">
      <Search />
      <Category />
      <Recycle />
      <Bestboard />
    </main>
    // </Router>
  );
};

export default Main;
