import React from 'react';
import Header from './Header/Header';
import Main from './Body/Main';
import Footer from './Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
