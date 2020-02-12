import React from 'react';
import Header from './components/Header/Header';
import './style/css/style.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Content />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
