import React from 'react';


function Navigation ({ currentPage, handlePageChange }) {

    return(
        <nav class="border">
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                    <li>
                        <a href="./assets/files/Resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navigation;