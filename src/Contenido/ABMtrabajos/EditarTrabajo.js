import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditarTrabajo({trabajo}) {

    const enviarTrabajo = (trab) => {
        alert("trabajo subido con exito")
    }
    if (trabajo.id)
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre del trabajo:</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={trabajo.nombre} />
                        <Form.Text className="text-muted">
                            Nombre con el cual aparecera en la foto del grid
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Detalle:</Form.Label>
                        <Form.Control type="text" placeholder="Detalle" value={trabajo.detalle} />
                        <Form.Text className="text-muted">
                            Esto aparece cuando abris la foto y la ves en grande, o para el blog
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categoria:</Form.Label>
                        <Form.Select aria-label="Categoria">
                            <option>Categoria a la que pertenece</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" onClick={() => enviarTrabajo()}>
                        Realizar cambios
                    </Button>
                </Form>
            </div>
        );
}