import React, { useState } from 'react';
import './LogIn.css';
import * as userActions from '../redux/user.actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

let LogIn = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [user, setUser] = useState({
        username :'',
        password : ''
    })
    let handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userActions.loginUser(user));
        dispatch(userActions.fetchData(user, history));
    }
    return ( 
            <div className="login">
                <div className="login-left">
                    <form onSubmit={handleSubmit}>
                            <input type="text" name="username" value={user.username} id="username" placeholder="Username" onChange={handleChange}/>
                            <br /><br/>
                            <input type="password" value={user.password} name="password" id="password" placeholder="Password" onChange={handleChange}/>
                            <br /><br />
                            <input type="submit" value="LogIn" id="loginButton" onChange={handleChange} />
                    </form>
                </div> 
                <div className="login-right">
                    <h3>Star Wars</h3>
                </div>
            </div>
    );
}
 
export default LogIn;