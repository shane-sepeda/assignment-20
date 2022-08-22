import React from 'react';
import './App.css';
import Header from './components/Header';
import Background from '.src/assets/images/background.png';

import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}> 
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
