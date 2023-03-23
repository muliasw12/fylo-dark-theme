import React from 'react';
import { Features, Intro, Navbar, Reviews, Footer, StayProductive, EarlyAccess } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Intro/>
      </div>
      <Features/>
      <StayProductive/>
      <Reviews/>
      <EarlyAccess/>
      <Footer/>
    </div>
  );
}

export default App;
