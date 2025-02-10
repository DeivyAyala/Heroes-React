import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui";
import { fireEvent, render,screen } from "@testing-library/react";

const mockNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));


describe('Pruebas en el <Narbar/>', () => { 

    const contextValue = {
        user: { name: "Deivy Ayala" },
        logout: jest.fn(),
      };

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario autenticado', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByText('Deivy Ayala')).toBeTruthy()

    })


    test('Debe llamar logout y navigate al hacer clic en Logoaut', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug();

        const logoutButton = screen.getByRole('button', {name: 'Logout'});
        expect(logoutButton.innerHTML).toBe('Logout')

        fireEvent.click(logoutButton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });

     })

     test('Debe contener los enlaces de Dc, Marvel y Search', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Marvel')).toBeTruthy()
        expect(screen.getByText('DC')).toBeTruthy()
        expect(screen.getByText('Search')).toBeTruthy()
      })
 })