
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

export const AuthProvider = ({children}) => {
    // const initialState = {
    //     logged: false
    // }

    const init = () =>{
      const user = JSON.parse( localStorage.getItem('user') ); // Al recargar se mantiene el inicio del usuario 

      return{
        logged: !!user,
        user: user
      }
    }

    const [authstate ,  dispatch] = useReducer(authReducer, {}, init ); 


    const login = (name = '') => {
      
      const user = {id: 'ABC', name}

      const action = {
        type: types.login,
        payload: user
      }
      localStorage.setItem('user', JSON.stringify(user)) // Ya que en el local storage solo se puede almacenar strings 
      dispatch(action)
    }

    const logout = () =>{  //Para que cuando se salga de la aplicación se le limpie el localStorage
      localStorage.removeItem('user');
      const action = {
        type: types.logout,
      }
      dispatch(action)
    }


  return (
    <AuthContext.Provider value={{
      ...authstate,
      login: login,
      logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
