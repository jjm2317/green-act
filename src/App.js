import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import MyBoookmark from './components/MyBoookmark/MyBoookmark';
import MyPost from './components/MyPost/MyPost';
import MyProfile from './components/MyProfile/MyProfile';
// import Main from './components/Main/Main';

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
      <Main />
      <Footer />
    </Container>
    </Container>


    
  );
};

export default App;
