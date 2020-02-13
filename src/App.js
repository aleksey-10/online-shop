import React from 'react';
import Header from './components/Header/Header';
import './style/css/style.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App({state}) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Content state={state} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
