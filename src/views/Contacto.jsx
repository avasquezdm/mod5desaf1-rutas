import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto() {
  return (
    <div>
    <Container className="text-center" style={{ maxWidth: '900px' }}>
    <h2 className='mt-3 mb-0'>Cuéntanos, ¿en qué te podemos ayudar? </h2>
      <Form>
    <Form.Group controlId="formEmail">
      <Form.Label className='mt-3'>Correo</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" /> 
    </Form.Group>
    <Form.Group controlId="formDescription">
      <Form.Label className='mt-3'>Descripción</Form.Label>
      <Form.Control as="textarea" style={{ height: '150px' }} />
    </Form.Group>
    <Button className='mt-3' variant="danger" type="submit">Enviar</Button> 
    </Form>
    </Container>
    </div>
  );
}

export default Contacto;