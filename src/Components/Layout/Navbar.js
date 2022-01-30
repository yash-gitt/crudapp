import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">USERS DATA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link " aria-current="page"  exact to="/">Home</NavLink>   
                    </div>
                </div>
            </div>
             <Link className='btn btn-light' to="/users/add"> Add Users</Link>


            </div>
        </nav>


    )
}


export default Navbar;