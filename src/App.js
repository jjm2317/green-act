import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
<<<<<<< HEAD
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import MyProfile from './components/MyProfile/MyProfile';
import MyBoookmark from './components/MyBoookmark/MyBoookmark';
import MyPost from './components/MyPost/MyPost';
=======
import Login from './components/Login/Login';
import Main from './components/Main/Main';
// import Main from './components/Main/Main';
>>>>>>> 209465366ae3c9ea2b6606581daa71085ba1b8e8

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
