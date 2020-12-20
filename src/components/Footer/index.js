import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


function Footer() {
    return (
    <div>
        <p>Github </p>
        <FontAwesomeIcon href="google.com" icon={["fab", "github-square"]}  size="xl" />
        <p>LinkedIn</p>
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
        
    </div>

    )
}

export default Footer;