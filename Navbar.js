// NavBar.js

import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav>
            <h1>Portfolio</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/certificate">Certificate</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
