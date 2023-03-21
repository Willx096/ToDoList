import { useState } from 'react'
import './App.css'
import { Container, Row, Col ,Form, Button,Table } from "react-bootstrap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [item, setItem] = useState("");
  const [lista, setLista] = useState([""]);

  function borraItem(x){
    const nuevaLista = [...lista]
    nuevaLista.splice(x,1)
    setLista(nuevaLista)
  }

  //<li></li>
  const listaItems = lista.map((el, index )=> <li key={index}>{el}</li>)
  const listaFilas = lista.map((el, index )=> 
  <tr key={index}><td>
    {index+1}</td>
    <td>{el}</td>
    <td><Button   variant="danger" onClick={()=>borraItem(index)}><FontAwesomeIcon  icon={faTrashCan}/></Button>
    <span className="papelera">
    </span>
    
    </td>
    
    </tr>)



  function nuevoItem(){
      const nuevaLista = [...lista];
      nuevaLista.push(item);
      setLista(nuevaLista);
      setItem("");
  }
  
  function limpiaLista(){
    setLista([]);
  }
  
  return (
    <>
     <Container>
     <h1>To Do List</h1>   
     <Row>
      <Col> 
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Entrar Valor :</Form.Label>
        <Form.Control type="text" value={item} onInput={e=> setItem(e.target.value)} />
      </Form.Group>
      <Button variant="success" onClick={nuevoItem}>Agregar</Button>      
      </Form>
      </Col>
      <Col>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {listaFilas}      
      </tbody>      
    </Table>
    <Button variant="danger" onClick={limpiaLista}>Clear</Button>

      </Col>
      </Row>          
     </Container>
     </>
)
    
         
}

export default App
