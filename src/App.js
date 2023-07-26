import React from 'react';
import { Navbar, Footer, Brand } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Brand />
        <Footer />
      </div>
    </div>
  );
};

export default App;
