import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([""]);
  //control -> input
  const listaItems = lista.map((el, index) => <li key={index}>{el}</li>);

  const listaFilas = lista.map((el, index) => (
    <tr key={index} className={el.split("$")[1]}>
      <td>{index}</td>
      <td>{el.split("$")[0]}</td>
      <td>{el.split("$")[1]}</td>
      <td>
        <Button onClick={() => borraItem(index)}>X</Button>
        <span className="papelera">
          <FontAwesomeIcon onClick={() => borraItem(index)} icon={faTrash} />
        </span>
      </td>
    </tr>
  ));

  function nuevoItem() {
    const nuevaLista = [...lista];
    nuevaLista.push(item);
    setLista(nuevaLista);
  }

  function limpiaLista() {
    setLista([]);
  }

  function borraItem(x) {
    const nuevaLista = [...lista];
    nuevaLista.splice(x, 1);
    setLista(nuevaLista);
  }

//
function nuevoTrabajo() {
  const nuevaLista = [...lista];
  nuevaLista.push(item+"$trabajo");
  setLista(nuevaLista);
}
function nuevoPersonal() {
  const nuevaLista = [...lista];
  nuevaLista.push(item+"$personal");
  setLista(nuevaLista);
}
function nuevoFamilia() {
  const nuevaLista = [...lista];
  nuevaLista.push(item+"$familia");
  setLista(nuevaLista);
}
function nuevoUrgente() {
  const nuevaLista = [...lista];
  nuevaLista.push(item+"$urgente");
  setLista(nuevaLista);
}

  const listaColoreada = lista.map((el, index) => (
    <tr key={index}>
      <td>{index}</td>
      <td>{el}</td>
      <td>
        <Button onClick={() => borraItem(index)}>X</Button>
        <span className="papelera">
          <FontAwesomeIcon onClick={() => borraItem(index)} icon={faTrash} />
        </span>
      </td>
    </tr>
  ));


  //table -> thead*(tr,th) -> tbody -> tr* -> td*
  //<ul>{listaItems}</ul>

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={item}
                onInput={(e) => setItem(e.target.value)}
                ClassName="colorPrueba"
              />
            </Form.Group>
            <Button variant="success" onClick={nuevoItem}>
              Boton
            </Button>
            <hr />
          </Col>
          <Col>
            {" "}
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>{listaFilas}</tbody>
            </Table>
            <Button variant="danger" onClick={limpiaLista}>
              Limpiar
            </Button>
          </Col>
        </Row>
        <br></br>
        <div className="fondo" >
          <Button variant="primary" onClick={nuevoTrabajo}>
            Trabajo(Azul)
          </Button>
          <br></br>
          <Button variant="danger" onClick={nuevoPersonal}>
            Personal(Rojo)
          </Button>
          <br></br>
          <Button variant="success" onClick={nuevoUrgente}>
            Urgente(Verde)
          </Button>
          <br></br>
          <Button variant="warning" onClick={nuevoFamilia}>
            Familia(Amarillo)
          </Button>
          <br></br>
        </div>
      </Container>
    </>
  );
}

export default App;