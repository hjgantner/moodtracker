import React from 'react';

function NavBar ({setUsername}) {
    return(
        <nav className="navbar navbar-inverse">
            <form>
                <div className="navbar-collapse">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="username"
                        onBlur={e => setUsername(e.target.value)}
                    />
                </div>
            </form>
        </nav>
    );
};

export default NavBar;