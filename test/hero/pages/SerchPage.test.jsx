import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SerchPage } from "../../../src/heroes/pages/SerchPage"

describe('Pruebas en <SerchPage/>', () => { 
    test('debe de mostarse correctamente con valores por defecto', () => { 
        const { container } = render(
            <MemoryRouter>
                <SerchPage/>
            </MemoryRouter>
        )
        // screen.debug()

        expect(container).toMatchSnapshot()
     })

     test('debe de mostarse a batman y el input con el valor de queryString', () => { 
        // render(
        //     <MemoryRouter initialEntries={['/serch?q=batman']}>
        //         <SerchPage/>
        //     </MemoryRouter>
        // )
    
        // const input = screen.getByRole('textbox');
        // expect(input.value).toBe('batman');
        // screen.debug()
     })
 })