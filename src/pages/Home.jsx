import React from 'react'
import { Navbar } from '../components/Navbar/Navbar.jsx'
import Header from '../components/Header/Header.jsx';

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default Home