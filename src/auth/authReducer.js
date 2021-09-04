import { types } from '../types/types'

const initialState = {
    name:'',
    logged: false
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.login:
            return {
                ...state,
                logged: true
            }

        case types.logout:
            return {
                logged: true
            }            
    
        default:
            state;
    }
}