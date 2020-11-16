import React from 'react';
import './Home.css'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
    <h1 className='home-title-text fas fa-tasks'>&nbsp;Welcome To TaskEase</h1>
    <div className='task-pic'></div>
    <Footer/>
    </div>
  );
}

export default Home;