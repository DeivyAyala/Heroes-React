import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SerchPage } from '../pages'
import { Navbar } from '../../ui'

export const HeroesRouters = () => {
  return (
    <>
    <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                {/*serch, Hero by Id */}

                <Route path="serch" element={<SerchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                
                <Route path="/" element={<Navigate to="/marvel"/>} />
            </Routes>
        </div>
    </>
  )
}
