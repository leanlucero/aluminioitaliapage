
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalCategoria from './ModalNuevaCategoria';
import LoginContext from "../Context/LoginContext"
import { eliminarCat } from "../Service/Conexiones"

export default function TablaCategorias(props) {

    const [categoriaEdit, setCategoriaEdit] = useState({})
    const [show, setShow] = useState(false);
    // const [categorias, setCategorias] = useState([])
    const { user } = useContext(LoginContext)

    useEffect(() => {        
            // setCategorias([...props.categorias]);    
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const eliminarCategoria = (cat) => {
        if (window.confirm('esta seguro q desea eliminar??')) {
            eliminarCat(cat.id, user)
            var array = [...props.categorias]
            var index = array.indexOf(cat)
            array.splice(index,1)
            props.setCategorias(array)
        }
    }


    const handleClickEdit = (cat) => {
        setCategoriaEdit(cat);
        handleShow()
    }
    
    return (
        <section className="about2">
            <section>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.categorias.map((cat) =>
                            <tr key={cat.id}>
                                <td >{cat.id}</td>
                                <td>{cat.nombre}</td>
                                <td>{cat.detalle}</td>
                                <td>
                                    <Button variant="outline-danger" onClick={() => eliminarCategoria(cat)}> Eliminar</Button>
                                    <br /><Button variant="outline-secondary" onClick={() => handleClickEdit(cat)}>Editar</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="sm" onClick={() => handleClickEdit([])} >Agregar nueva Categoria</Button>
                </div>
            </section>
            <section id="edit">
                <Modal backdrop="static"
                    keyboard={false} show={show} onHide={handleClose}>
                    <ModalCategoria handleClose={handleClose} setCategorias={ props.setCategorias } categorias={ props.categorias }categoria={categoriaEdit} />
                </Modal>
            </section>
        </section>
    )
}