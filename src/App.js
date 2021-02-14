import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import MyProfile from './components/MyProfile/MyProfile';
import MyBoookmark from './components/MyBoookmark/MyBoookmark';
import MyPost from './components/MyPost/MyPost';

console.log(Header);
const App = () => {
  return (
    
    // <Container>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </Container>

    // 보이게 하기
    <Container>
      <Header />
      <Login />
      <Footer />
      <Header />
      <Signup />
      <Footer />
      <Header />
      <MyProfile />
      <Footer />
      <Header />
      <MyBoookmark />
      <Footer />
      <Header />
      <MyPost />
      <Footer />
    </Container>


    
  );
};

export default App;
