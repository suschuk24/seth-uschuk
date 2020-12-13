import React from "react";
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'


function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Work></Work>
      </main>
    </div>
  );
}

export default App;
