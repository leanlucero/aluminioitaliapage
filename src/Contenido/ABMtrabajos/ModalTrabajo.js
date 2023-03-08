import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState, useContext } from 'react';
import ModalNuevaCategoria from '../ABMcategorias/ModalNuevaCategoria';
import LoginContext from "../Context/LoginContext"
import { enviarTrabajo } from "../Service/Conexiones"

export default function ModalTrabajo({ trabajo, trabajos, setTrabajos, categorias, handleClosePadre }) {
    const [show, setShow] = useState(false);
    const { user } = useContext(LoginContext)

    const [nombre, setNombre] = useState(trabajo.nombre)
    const [detalle, setDetalle] = useState(trabajo.detalle)
    const [url, setUrl] = useState(trabajo.imagenUrl)
    const [imageId, setImageId] = useState(trabajo.imagenId);
    const [categoriaId, setCategoriaId] = useState()
    const [imagePreview, setImagePreview] = useState(null);
    const [imageData, setImageData] = useState(new FormData());

    useEffect(() => {
        if (trabajo.categoria) setCategoriaId(trabajo.categoria.id)
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        imageData.append('multipartFile', file);
        setImagePreview(URL.createObjectURL(file));
    };
    const generarCambios1 = (event) => {
        setNombre(event.target.value)
    }

    const generarCambios2 = (event) => {
        setDetalle(event.target.value)
    }

    const generarCambios3 = (event) => {
        setCategoriaId(event.target.value)
    }

    const subirTrabajo = async() => {
        
        let ids = 0
        if (trabajo.id) ids = trabajo.id
        const trab = {
            'id': ids,
            'nombre': nombre,
            'detalle': detalle,
            'imagenUrl': url,
            'imagenId': imageId,
            'categoria': {
                'id': categoriaId
            }
        };
        imageData.append('trabajo', new Blob([JSON.stringify(trab)], {
            type: "application/json"
        }));
        const resultado = await enviarTrabajo(imageData, user)
        if (resultado)  {
            let trabajos2 = [...trabajos];
            let indices = trabajos2.map(a => a.id)
            const index = indices.indexOf(resultado.id)
            if (index > -1 ) trabajos2[index]= resultado
            else trabajos2.push(resultado)
            setTrabajos(trabajos2)
            handleClosePadre()}
    }
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>
                    {trabajo.categoria ? 'Editar Trabajo Realizado'
                        : 'Nuevo Trabajo '
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" >
                    <Form.Label >Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        name="nombre"
                        onChange={generarCambios1}
                    />
                    <Form.Text muted>
                        Nombre con el cual se vera en sus fotos
                    </Form.Text>
                </Form.Group >
                <Form.Group className="mb-3" >
                    <Form.Label >Detalle</Form.Label>
                    <Form.Control
                        type="text"
                        value={detalle}
                        name="detalle"
                        onChange={generarCambios2}
                    />
                    <Form.Text muted>
                        Detalle que se ve cuando abre la foto
                    </Form.Text>
                </ Form.Group >
                <Form.Group className="mb-3" >
                    <img src={url} alt="" style={{ width: '40%' }} />
                    <img src={imagePreview} alt="" style={{ width: '40%' }} />
                    <br />
                    <input

                        id="uploadimage"
                        type="file"
                        onChange={handleUploadClick}
                    />
                </ Form.Group >
                <Form.Group className="mb-3" >
                    <Form.Label >Categoria</Form.Label>
                    <Form.Control
                        as="select"
                        value={categoriaId}
                        onChange={generarCambios3}
                    >
                        <option>Seleccione a que categoria pertenece</option>
                        {categorias.map((cat) =>

                            <option value={cat.id}>{cat.nombre}</option>

                        )}
                    </Form.Control>
                    <Form.Text muted>
                        Categoria a la que pertenece
                    </Form.Text>
                    <div className="d-grid gap-2">
                        <Button variant='info' size='sm' onClick={handleShow}> Crear categoria nueva</Button></div>
                </ Form.Group >
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClosePadre}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => subirTrabajo()}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
            <Modal
                size="sm"
                show={show}
                onHide={handleClose}
                centered backdrop="static"
                keyboard={false} aria-labelledby="contained-modal-title-vcenter">
                <ModalNuevaCategoria handleClose={handleClose} categoria={[]} />
            </Modal>
        </div>
    )
}