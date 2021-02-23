import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Signup from './components/SignUp/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

console.log(Header);
const App = () => {
  return (
    <Router>
    <Container>
      <Header />
      <Switch>
      <Route path='/Main' component={Main}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Signup' component={Signup}/>
      </Switch>
      <Footer />
    </Container>
    </Router>
  );
};

export default App;
