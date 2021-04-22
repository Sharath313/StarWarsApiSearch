import Axios from "axios";

export const LOGIN_USER = 'LOGIN_USER';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const loginUser = (user) => {
    return{
        type : LOGIN_USER,
        payload : { user : user }
    }
};
export const fetchData = (user, history) => {
    const {username, password} = user;
    return async(dispatch) => {
        dispatch({type : FETCH_DATA_REQUEST});
        try {
            let dataURL = `https://swapi.dev/api/people/?search=${username}`;
            let response = await Axios.get(dataURL);
            let userInformation = response.data.results[0];
            if(username){
                if(userInformation.birth_year === password) {
                    dispatch({type : FETCH_DATA_SUCCESS, payload :userInformation});
                    history.push("/dashboard");
                }else {
                  dispatch({type : FETCH_DATA_FAILURE, payload : 'Incorreect Password'});
                    alert('Incorreect Password');
                }
            }else {
                dispatch({type : FETCH_DATA_FAILURE, payload : 'User not found'})
                alert('User not found');
            }
        } catch (error) {
            dispatch({type : FETCH_DATA_FAILURE, payload : error})
        }
    } 
};