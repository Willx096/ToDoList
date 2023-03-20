import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
  

  const [errorPassword, setErrorPassword] = useState(false)

  function enviar (e){
    // e.preventDefault();

    console.log(email, password)
    if (!password.includes("$")){
      setErrorPassword(true);

    }else{
      setErrorPassword(false)
    }
   
  }
  
  return (
          <Container>         



            <Row>
              <h1>Formulario {email}+{password}</h1>
            <Col>
            <Form onSubmit={enviar}>
            <Form.Group className="mb-" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Nombre"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="Apellido" placeholder="Apellido"/>
        </Form.Group>       
        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="direccion" placeholder="Dirección"/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>C.Postal</Form.Label>
        <Form.Control type="CP" placeholder="C.Postal"/>
        </Form.Group>   
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Check
           label ="Menos de 25 años"
           name='group1'
           type="radio"
          />
          <Form.Check
           label ="26 a 40 años"
           name='group1'
           type="radio"
          /><Form.Check
          label ="41 a 65 años"
          name='group1'
          type="radio"
         />
         <Form.Check
           label ="Más de 66 años"
           name='group1'
           type="radio"
          />
        </Col>
        <Col> 
        <FontAwesomeIcon icon={faPhone} />       
        <Form.Label>Telefono móbil</Form.Label>
        <Form.Select aria-label="Default select example">            
      <option>Open this select menu</option>
      <option value="1">No tiene</option>
      <option value="2">Si tiene</option>
      </Form.Select>
      <Form.Label>Vehiculo</Form.Label>
        <Form.Select aria-label="Default select example">            
      <option>Open this select menu</option>
      <option value="1">No tiene</option>
      <option value="2">Si tiene</option>
    </Form.Select>        
        </Col>
        
      </Row>
      

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
           
            </Col>           
           </Row>      
        
          </Container>
  )
}

export default App
