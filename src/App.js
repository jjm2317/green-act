import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Bestboard from './components/Main/Bestboard';
import PlasticWaste from './components/Recycle/PlasticWaste';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './containers/auth/LoginForm';
import RecyclePage from './components/Recycle/RecyclePage';
import GeneralWaste from './components/Recycle/GeneralWaste';
import BoardMain from './components/Board/BoardMain';
import GlassTrash from './components/Recycle/GlassTrash';
import FoodWaste from './components/Recycle/FoodWaste';
import SignUpForm from './containers/auth/SignUpForm';

console.log(Header);
const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Main} />
        <Switch>
          <Route path="/Login" component={LoginForm} />
          <Route path="/SignUp" component={SignUpForm} />
          <Route path="/board" component={BoardMain} />
          <Route path="/Recycle/Plastic" component={PlasticWaste} />
          <Route path="/recycle" component={RecyclePage} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
