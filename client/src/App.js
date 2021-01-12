import React from 'react'

import Header from './components/Header.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Projects from './components/Projects/Projects.jsx';
import Motto from './components/Motto/Motto.jsx';
import Interests from './components/Interests/Interests.jsx';

import './css/style.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Technologies />
      <Projects />
      <Motto />
      <Interests />
      <div className="contact"></div>
      <footer className="footer"></footer>
    </div >
  );
}

export default App;
