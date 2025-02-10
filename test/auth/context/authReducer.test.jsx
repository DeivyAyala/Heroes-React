import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', () => { 

    const initialState = {
        logged: false,
    }

    const user = {
        id: 'ABC',
        name: 'Deivy Alexander'
    }

    test('debe de retornar el estado por defecto', () => { 
        const newState = authReducer(initialState,{})
        expect(newState).toBe(initialState)
     })



    test('debe de (login) llamar el login autenicar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload:user
        }

        const newState = authReducer(initialState, action);
        expect(newState).toEqual( {"logged": true, "user": action.payload})
        expect(newState.logged).toBe(true)
     })

    test('debe de (logoaut) borrar el name del usuario y logged en false', () => { 
        const state = {
            logged: true, 
            user: {id: '123', name: 'Deivy'}
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer(state, action)
        console.log(newState)
        expect(newState).toEqual( { logged: false, name: null })
        expect(newState.logged).toBe(false)

     })
 })