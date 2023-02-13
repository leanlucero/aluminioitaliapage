import { useState, useEffect } from "react";
import TablaCategorias from "./TablaCategorias.js";
import { getCategorias } from "../Service/Conexiones"

export default function Abmcategorias() {
    const [categorias , setCategorias] = useState([]);

    useEffect(() => {
        traerCategorias()
    }, [])

    const traerCategorias = async () =>{
        let persons= await getCategorias()
        setCategorias( persons );
        }
     

    return (
        <div className="App">
            <TablaCategorias categorias={categorias} setCategorias={setCategorias}/>
        </div>
    )
}