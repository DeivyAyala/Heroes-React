import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"

describe('Pruebas en <PrivateRoute/> ', () => { 

    test('debe de mostrar el children si esta autentificado ', () => { 

        Storage.prototype.setItem = jest.fn()

        const contexValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Deivy'
            }
        }
        render(
            <AuthContext.Provider value={ contexValue } >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
    
        // screen.debug()
        expect(screen.getByText('Ruta Privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman')
        })
    
 })