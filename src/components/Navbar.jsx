import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/samuel'>Samuel</Link>
                <Link to='/josiah'>Josiah</Link>
                <Link to='/caleb'>Caleb</Link>
                <Link to='/jaelen'>Jaelen</Link>
                <button onClick={() => props.setDarkMode((prevMode) => !prevMode)}>
                    Toggle {props.darkMode ? "Light" : "Dark"} Mode
                </button>
            </div>
        </nav>
    )
}

export default Navbar;