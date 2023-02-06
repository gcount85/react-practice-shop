import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import productData from './data.js';
import { useState } from 'react';

function App() {
  let [dataList, setDataList] = useState(productData);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container">
        <div className="row">
          {dataList.map((data, i) => {
            return <DataCard data={data}></DataCard>;
          })}
        </div>
      </div>
    </>
  );
}

function DataCard(props) {
  return (
    <div className="col-md-4" key={props.data.title}>
      <img src="logo512.png" width="80%" alt={props.data.title} />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
    </div>
  );
}

export default App;
