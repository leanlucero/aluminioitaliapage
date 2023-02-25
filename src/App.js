import React, { lazy } from 'react';
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Index from './Contenido/Index.js'
import Login from './Contenido/Login.js'
import Abmtrabajos from './Contenido/ABMtrabajos/Abmtrabajos'
import Menu from './Contenido/Menu.js';
import { LoginProvider } from './Contenido/Context/LoginContext';

const Abmcategorias = lazy(() => import('./Contenido/ABMcategorias/Abmcategorias'))

function App() {
  return (
    <>
        <LoginProvider>
          <Menu />
          <Routes  >
            <Route exact path="/" element={<Index />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/admin/trabajos" element={<Abmtrabajos />} />
            <Route exact path="/aluminioitaliapage/admin/categorias" element={<Abmcategorias />} />
          </Routes>
        </LoginProvider>
    </>
  )
}

export default App