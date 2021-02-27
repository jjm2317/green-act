import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Main from './components/Main/Main';
import Bestboard from './components/Main/Bestboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

console.log(Header);
const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route exact path="/" component={Main} />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/board" component={Bestboard}/>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
