import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


function Footer() {
    return (
    <div className = "footer">
        <a href="https://www.github.com/suschuk24">
            <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" /> 
        </a>
        <a href="https://www.linkedin.com/in/seth-uschuk-9232451b0/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a> 
        <a href="https://www.freecodecamp.org/fcc996ffc2b-2e00-4fe7-8b24-9fae9b79ebe6">
            <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="2x" />
        </a>    
    </div>

    )
}

export default Footer;