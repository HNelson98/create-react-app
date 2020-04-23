import React from 'react'

const Header = () => {
    return (
        <>
            <nav>
                <a href="resume.html">Home</a>
                <a href="https://github.com/HNelson98">GitHub</a>
                <a href="https://hnelson98.github.io/portfolio-website/">Portfolio</a>
                <a href="https://www.linkedin.com/in/henry-nelson-1b25441a4/">Contact</a>
            </nav>
            <header>
                <img class="headerimg" src="imgs\Oregon.jpeg"
                    alt="an Image of a lake surrounded by cliffs with an island in the middle" />
                <h1>Henry Nelson - Web Developer</h1>
                <p>I am currently a student at Lambda School. I would love any oppertunity to get more experiance!</p>
                <a href="https://twitter.com/HenryNe16472388"><button>Reach Out!</button></a>
            </header>
        </>

    )
}