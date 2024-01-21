import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
    return (
        <nav>
            <div className='navLinks'>
                <Link to='/'>Home</Link>
                <Link to='/samuel'>Tech</Link>
                <Link to='/josiah'>Finance</Link>
                <Link to='/caleb'>News</Link>
                <Link to='/jaelen'>Diet</Link>
                <button onClick={() => props.setDarkMode((prevMode) => !prevMode)}>
                     {props.darkMode ? "🔅" : "🌙"} 
                </button>
            </div>
        </nav>
    )
}

export default Navbar;