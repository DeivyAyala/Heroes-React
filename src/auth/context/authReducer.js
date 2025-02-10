import { types } from "../types/types";

// Aqui no se puede llamar el Local Storage, axios o apis 

// const initialState = {
//     logged: false,
// }



export const authReducer = (state = {}, action) =>{

    switch (action.type) {
        case types.login:
            
            return {
                ...state, //Para no perder la información
                logged: true,
                user: action.payload
            }
        
        case types.logout:
             return {
                logged: false,
                name: null
             }
    
        default:
            return state
    }
}