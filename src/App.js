import React from "react";
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faLinkedin, faGithub)

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Work></Work>
        <Footer></Footer>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
