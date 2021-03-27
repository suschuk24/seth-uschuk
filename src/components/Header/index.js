import React, { useEffect } from 'react'


function Header({currentPage, setPage}) {

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <header className="header-title">
        <h2>
          <a data-testid="link" href="/react-portfolio">
             Seth Uschuk's React Portfolio
          </a>
        </h2>
        <nav>
          <ul className="nav">
            <li className="mx-2">
              <a data-testid="about" href="#about" onClick={() => setPage('About Me')} className='navLinks'>About Me
              </a>
              <a data-testid="projects" href="#projects" onClick={() => setPage('Projects')} className='navLinks'>Projects
              </a>
              <a data-testid="resume" href="#skills" onClick={() =>  setPage('Resume')} className='navLinks'>My Skills
              </a>
              <a data-testid="contact" href="#contact" onClick={() =>  setPage('Contact')} className='navLinks'>Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header