import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <header className="header bg-dark ">
            <div className= "container">
                <nav className = "navbar navbar-dark navbar-expand-lg" >
                    <Link to ="/" className = "navbar-brand">ToDo Track</Link>
                    <div className="collapse navbar-collapse">
                        <ul className = "navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Todo</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            </header>
        );
    }
}