import Menu from "../Menu"
import { useState, useEffect } from "react";
import TablaTrabajos from "./TablaTrabajos";
import { getCategorias, getTrabajos, deleteTrabajo } from "../Service/Conexiones"

export default function Abmtrabajos() {
    const [trabajos, setTrabajos] = useState([]);
    const [categorias , setCategorias] = useState([]);

    useEffect(() => {
        traerTrabajos();
        traerCategorias()
    },[])

    const eliminartrab = async (trab, user) => {
        const resp = await deleteTrabajo(trab.id, user)
        if (resp) {
            var array = [...trabajos]
            var index = array.indexOf(trab)
            array.splice(index,1)
            setTrabajos(array)}
        alert('Trabajo elimado ! ')
    }

    const traerTrabajos = async() => {
        const jobs = await getTrabajos();
        setTrabajos(jobs);
            
    }

    const traerCategorias = async () =>{
        const persons= await getCategorias()
        setCategorias( persons );
        }

    return (
        <div className="App">
            <Menu />
            <TablaTrabajos trabajos={trabajos} setTrabajos={setTrabajos} categorias={categorias} eliminartrab={eliminartrab}/>
        </div>
    )
}