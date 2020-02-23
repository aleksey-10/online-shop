import React from 'react';
import Header from './components/Header/Header';
import './style/scss/style.scss';
import { HashRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
      <HashRouter>
        <div className="wrapper">
          <Header />
          <Content />
          <Footer />
        </div>
      </HashRouter >
  );
}

export default App;
