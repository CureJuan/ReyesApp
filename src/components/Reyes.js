import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Reyes({ reyes, setTotal, total }) {
  const select = (e) => {
    setTotal(Number(e.target.value) + Number(total));
    e.target.parentNode.parentNode.parentNode.style.display = "none";
  };

  const borrar = (e) => {
    e.target.parentNode.parentNode.parentNode.remove();
  };

  return (
    <>
      <Row xs={1} md={4}>
        {reyes.map((rey) => (
          <Col key={rey.id}>
            <Card className="card" style={{ backgroundColor: rey.color }}>
              <Card.Body>
                <Card.Title className="card-title">Rey {rey.rey}</Card.Title>
                <CardHeader className="card-header">{rey.reynado}</CardHeader>
                <Card.Img className="image" variant="top" src={rey.imge} />
                <p className="info">
                  El Rey {rey.rey} a comido {rey.vacas * 365 * rey.años} vacas,
                  en sus {rey.años} años de reynado.
                </p>
                <h6>Precio: $ {rey.precio}</h6>
                <Button
                  className="boton-borrar"
                  onClick={borrar}
                  value={rey.id}
                >
                  Borrar
                </Button>
                <Button
                  className="boton-compra"
                  onClick={select}
                  value={rey.precio}
                >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Reyes;
