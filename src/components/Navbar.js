import React from 'react';
import { useSelector } from 'react-redux';
import * as userReducer from '../redux/user.reducer';
import {Link} from 'react-router-dom'

let Navbar = () => {
    const userInfo = useSelector(state => {
        return state[userReducer.userFeatureKey];
    })
    const { userData } = userInfo;
        return(
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <div className="container">
                        <Link to="#" className="navbar-brand">Navbar</Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Expo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link text-white">Welcome {userData.name} </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-danger btn-md mx-3">Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
};
export default Navbar;