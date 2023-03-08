import { enviarCategoria } from "../Service/Conexiones"
import LoginContext from "../Context/LoginContext"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useContext } from 'react';

export default function NuevaCategoria(props){
const [nombre , setNombre] = useState(props.categoria.nombre)
const [detalle, setDetalle] = useState(props.categoria.detalle)
const { user } = useContext(LoginContext)

const generarCambios1 = (event)=>{
    setNombre(event.target.value)
}

const generarCambios2 = (event)=>{
    setDetalle(event.target.value)
}

const crearCategoria = async()=>{
    const aux = await enviarCategoria(props.categoria, nombre, detalle, user )
    if (aux) {
        let categoria2 = [...props.categorias];
        let indices = categoria2.map(a => a.id)
        const index = indices.indexOf(aux.id)
        if (index > -1 ) categoria2[index]= aux
        else categoria2.push(aux)
        props.setCategorias(categoria2)
    }
    props.handleClose()
}
return(
    <div>
                <Modal.Header closeButton className="categModal">
                    <Modal.Title>Nueva Categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body className="categModal" >
                    <Form.Group className="mb-3" >
                        <Form.Label >Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name='nombre'
                            value={nombre}
                            onChange={generarCambios1}
                        />
                        <Form.Text style={{ color: "white", }}>
                            Nombre en el cual se filtrara sus fotos
                        </Form.Text>
                    </Form.Group >
                    <Form.Group className="mb-3" >
                        <Form.Label >Detalle</Form.Label>
                        <Form.Control
                            type="text"
                            name="detalle"
                            value={detalle}
                            onChange={generarCambios2}
                        />
                        <Form.Text  style={{ color: "white", }}>
                            Aparece en la descripcion de los trabajos que se realizan
                        </Form.Text>
                    </ Form.Group >
                </Modal.Body>
                <Modal.Footer className="categModal" >
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={()=>crearCategoria()}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </div>
)
        }