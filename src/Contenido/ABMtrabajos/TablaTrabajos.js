
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalTrabajo from './ModalTrabajo';
import LoginContext from "../Context/LoginContext"

export default function TablaTrabajos({trabajos, setTrabajos, categorias,eliminartrab}) {

    const [ trabajoEdit, setTrabajoEdit] = useState ([])    
    const [show, setShow] = useState(false);
    const { user } = useContext(LoginContext);

    // let trabajos2= trabajos

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClickEdit = (trab)=> {
        setTrabajoEdit(trab);
        handleShow()
      }

      const eliminarTrabajo = (trab)=> {
        if (window.confirm('esta seguro q desea eliminar??')) {

            eliminartrab(trab, user)
        }
      }

    return (
        <section className="about2">
             {(trabajos) ? (<>
            <section>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>URL imagen</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {trabajos.map((trab) =>
                        <tr key={trab.id}>
                            <td >{trab.id}</td>
                            <td>{trab.nombre}</td>
                            <td>{trab.detalle}</td>
                            <td ><img style={{ maxWidth: "30%", }} src={trab.imagenUrl} alt=''/></td>
                            <td>{trab.categoria.nombre}</td>
                            <td>
                                <Button  variant="outline-danger" onClick={()=> eliminarTrabajo(trab)}> Eliminar</Button>
                                <br/><Button  variant="outline-secondary" onClick={()=> handleClickEdit(trab)}>Editar</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className="d-grid gap-2">
                <Button variant="primary" size="sm" onClick={()=> handleClickEdit([])} >Agregar nuevo Trabajo</Button>
            </div>
        </section>
        </>
        ):(
        <div className="d-grid gap-2">
                <Button variant="primary" size="sm" onClick={()=> handleClickEdit([])} >Agregar nuevo Trabajo</Button>
        </div>
        )}
        <section id="edit">
            <Modal backdrop="static"
        keyboard={false} show={show} onHide={handleClose}>
                <ModalTrabajo handleClosePadre={handleClose} trabajo={trabajoEdit} categorias={categorias} setTrabajos={setTrabajos} trabajos={trabajos}/>
            </Modal>
        </section>
        </section>
    )
}




