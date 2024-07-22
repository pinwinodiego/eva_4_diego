import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

import { useRouter } from "next/router";

const Login = () => {
  const [eUser, setUser] = useState("");
  const [eLongitude, setLongitude] = useState("");
  const [epassword, setpassword] = useState("");

  // envía a otra página
  const router = useRouter();

  // actualizo los estados
  const saveUser = (e: any) => {
    setUser(e.currentTarget.value);
  };

  const savePassword = (e: any) => {
    setpassword(e.currentTarget.value);
  };

  // validacion de longitud de la contraseña
  const validacionLongitud = (valor: string) => {
    if (valor.length < 4) {
      setLongitude("debes ingresar al menos 4 letras");
    } else {
      setLongitude("");
    }
  };

  // validar que el login sea admin admin y reedireccionar al menu principal
  const validacionUser = () => {
    if (eUser === "admin" && epassword === "admin") {
      router.push("/Barra");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Inicio de Sesión
                </Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese usuario"
                      value={eUser}
                      onChange={saveUser}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese contraseña"
                      value={epassword}
                      onChange={(e) => {
                        validacionLongitud(e.currentTarget.value);
                        savePassword(e);
                      }}
                    />
                    <Form.Text className="text-danger">{eLongitude}</Form.Text>
                  </Form.Group>

                  <Button
                    variant="primary"
                    onClick={validacionUser}
                    className="w-100 mt-3"
                  >
                    Iniciar Sesión
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
