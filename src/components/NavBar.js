import React from 'react';
import { Link } from "react-router-dom";


function NavBar ({setUsername, newMood}) {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <form className="form-inline">
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="username"
                    onBlur={e => setUsername(e.target.value)}
                />
            </form>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        to="/"
                        onClick={newMood}
                    >
                        New Mood
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link active"
                        to="/timeline"
                    >
                        Timeline
                    </Link>
                </li>
            </ul>
            </div>

        </nav>
    );
};

export default NavBar;