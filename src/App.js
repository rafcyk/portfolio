import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <>
    <Sidebar/>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
