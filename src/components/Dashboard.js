import React from 'react';
import Navbar from './Navbar';
import * as userReducer from '../redux/user.reducer';
import { useSelector } from 'react-redux';


let Dashboard = () => {
    const userInfo = useSelector(state => {
        return state[userReducer.userFeatureKey];
    })
    const { userData } = userInfo;
    return(       
        <React.Fragment>
            <Navbar />
                <div className="container mt-5">
                    <table className="table table-striped table-hover text-center table-primary">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Sl No</th>
                                <th>Description</th>
                                <th>Value</th>
                            </tr>
                        </thead>     
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>{userData.name}</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Height</td>
                            <td>{userData.height}</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Mass</td>
                            <td>{userData.mass}</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Hair Color</td>
                            <td>{userData.hair_color}</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Skin Color</td>
                            <td>{userData.skin_color}</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Birth Year</td>
                            <td>{userData.birth_year}</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Gender</td>
                            <td>{userData.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </React.Fragment>
    )
}

export default Dashboard;