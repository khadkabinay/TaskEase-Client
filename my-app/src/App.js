import React from 'react';
import Routes from './config/Routes';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'



function App() {
  return (
    <div  className="App">
     <Header />
     <Routes/>
    
    </div>
  );
}

export default App;
