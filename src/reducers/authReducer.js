import { types } from "../types/types";

const initialState = {
    checking:true,
    //uid:null,
    //name:null
}

export const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking:false,
            }

        case types.authCheckingFinish:
            return {
                ...state, 
                checking:false
            }

        case types.authLogOut:
            return {
                checking: false,
                uid:null,
                name:null
            }
    
        default:
            return state;
    }
}