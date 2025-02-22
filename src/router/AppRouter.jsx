import {  Route, Routes } from "react-router-dom"

import { HeroesRouters } from "../heroes"

import {LoginPage} from '../auth'
import { PrivateRoute } from "./PrivateRoute"
import { PublicRouter } from "./PublicRouter"


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="/login" element={
              <PublicRouter>
                <LoginPage/>
              </PublicRouter>
            }/>

          
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRouters/>
              </PrivateRoute>
            } />

            {/* <Route path="login" element={<LoginPage />} /> */}  
            {/* <Route path="/*" element={<HeroesRouters />} /> */}
        </Routes>
    </>

  ) 
}
