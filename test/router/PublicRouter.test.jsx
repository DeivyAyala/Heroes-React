import { getByText, render, screen } from "@testing-library/react"
import { PublicRouter } from "../../src/router/PublicRouter"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PublicRouter>', () => { 

    test('si no esta autentificado debe de mostrar el children no esta autentificado ', () => { 
        const contexValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={ contexValue } >
                <PublicRouter>
                    <h1>Ruta Publica</h1>
                </PublicRouter>
            </AuthContext.Provider>
        )

        // screen.debug()
        expect(screen.getByText('Ruta Publica')).toBeTruthy()
     })

     test('debe de Navegar si esta autentificado', () => { 
        const contexValue = {
            logged: true,
            user: {
                name: 'Deivy',
                id: '123'
            }
        }
        render(
            <AuthContext.Provider value={ contexValue } >
                <MemoryRouter initialEntries={['/login']} >
                    <Routes>
                        <Route path="login" element={
                            <PublicRouter>
                                <h1>Ruta Publica</h1>
                            </PublicRouter>
                        }/>
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>  
            </AuthContext.Provider>
        )

        expect(screen.getAllByText('Pagina Marvel')).toBeTruthy()

      })
 })