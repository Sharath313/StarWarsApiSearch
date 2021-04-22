import * as userActions from './user.actions';

export const userFeatureKey = 'user-info';

let initialState = {
    userData : [],
    loading : false,
    errorMessage : '',
    user : {
        username :'',
        password : ''
    }
};

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case userActions.LOGIN_USER:
            return{
                user : payload.user
            };
        case userActions.FETCH_DATA_REQUEST :
            return {
                ...state,
                loading : true
            }
        case userActions.FETCH_DATA_SUCCESS :
            return {
                ...state,
                loading : false,
                userData : payload
            }
        case userActions.FETCH_DATA_FAILURE :
            return {
                ...state,
                loading : false,
                errorMessage : payload
            }
        default : return state;
    }
};