import React from 'react';

const Navbar = () => {
    return (
        <div>
            
            <ul className="nav justify-content-center p-3 fixed-top">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#intro"><p class="lead">Madeleine</p></a>
                </li>
                <li className="nav-item ms-auto">
                    <a className="nav-link" href="#about"><p className="lead">About</p></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#work"><p className="lead">Work</p></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact"><p className="lead">Contact</p></a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar

