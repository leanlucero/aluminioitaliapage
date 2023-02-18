import React, { lazy } from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from './Contenido/Index.js'
import Login from './Contenido/Login.js'
import Abmtrabajos from './Contenido/ABMtrabajos/Abmtrabajos'
import Menu from './Contenido/Menu.js';
import { LoginProvider } from './Contenido/Context/LoginContext';

const Abmcategorias = lazy(() => import('./Contenido/ABMcategorias/Abmcategorias'))

function App() {
  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <Menu />
          <Routes>
            <Route exact path="/aluminioitaliapage" element={<Index />} />
            <Route exact path="/aluminioitaliapage/login" element={<Login />} />
            <Route exact path="/aluminioitaliapage/admin/trabajos" element={<Abmtrabajos />} />
            <Route exact path="/aluminioitaliapage/admin/categorias" element={<Abmcategorias />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </LoginProvider>
      </BrowserRouter>
    </>
  )
}

export default App