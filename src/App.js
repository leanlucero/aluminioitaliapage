import React, { Suspense, lazy } from 'react';
import "./App.css"
import { Switch, Routes, Route } from "react-router-dom"
import Index from './Contenido/Index.js'
import Login from './Contenido/Login.js'
import Abmtrabajos from './Contenido/ABMtrabajos/Abmtrabajos'
import Menu from './Contenido/Menu.js';
import { LoginProvider } from './Contenido/Context/LoginContext';

const Abmcategorias = lazy(() => import ( './Contenido/ABMcategorias/Abmcategorias'))

function App() {
  return (
    <>
    <Switch>      
    <LoginProvider>
        <Menu />
        <Route exact path="/" component={Index } />
        <Route exact path="/login" component={<Login />} />
        <Route exact path="/admin/trabajos" element={<Abmtrabajos />} />
        <Route exact path="/admin/categorias" element={<Abmcategorias/>} />
      </LoginProvider>
    </Switch>
    </>
  )
}

export default App