import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <AppRouter/>', () => { 
    test('Debe de mostrar el login si no esta autentificado ', () => { 

        const contextValue = {
            logged: false
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                 <AuthContext.Provider value={{contextValue}}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
           
        );

        // screen.debug()
        expect( screen.getAllByText('Login').length ).toBe(2)

     })

     test('Debe de mostrar el componente de Marvel si esta autentificado', () => { 
        // const contextValue = {
        //     logged: true,
        //     user: {
        //         id: '123',
        //         name: 'Deivy'
        //     }
        // }
        // render(
        //     <MemoryRouter initialEntries={['/login']}>
        //          <AuthContext.Provider value={{contextValue}}>
        //             <AppRouter/>
        //         </AuthContext.Provider>
        //     </MemoryRouter>
        // );

        // expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1)
        

      })
 })