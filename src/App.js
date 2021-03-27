import React, { useState } from "react";
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAws, fab, faGit } from '@fortawesome/free-brands-svg-icons'
import { faChartArea, faCodeBranch, faRocket, fas, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3, faReact, faNode, faJs} from '@fortawesome/free-brands-svg-icons'




library.add(fab, faLinkedin, faGithub, faHtml5, faCss3, faReact, faNode, faJs, faGit, faAws)
library.add(fas, faDatabase, faChartArea, faCodeBranch, faTerminal, faRocket)
function App() {
  const [currentPage, setPage] = useState('About Me');

  const page = () => {
    switch (currentPage) {
      default:
        return <About />;
      case 'Projects':
        return <Work />;
      case 'Contact': 
        return <ContactForm />
      case 'Resume':
        return <Resume />
    }

  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setPage={setPage}/>

      <main className="App">
        {page()}
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
