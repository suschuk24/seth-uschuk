import React, { useState } from 'react'



function Header() {

    const [pages] = useState([
        {
            name: 'My Work',
            description: "A showcase of applications I've built and contributed to"
        },
        {
            name: 'Contact',
            description: 'Please enter your information below with any questions, and I will get back to you as I can!'
        },
        {
            name: "Resume",
            description: 'an HTML version of my resume'
        }
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    <a href="/">Seth Uschuk's Portfolio</a>
                </h1>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="#about">
                                About me
                            </a>
                        </li>
                        {pages.map((page) => (
                        <li
                            className="mx-1"
                            key={page.name}
                        >
                            <span>
                                {page.name}
                            </span>
                        </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header