import React from 'react'
import { Button,Form } from 'react-bootstrap';


const login = () => {
    const validarLongitud = (valor: string) => {
        if (valor.length > 4) {
          setContraseña("");
        } else {
          setContraseña("debes ingresar al menos 4 letras");
        }
      };
    return (
    <>
    <Form>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese usuario"
            value={eUsuario}
            onChange={guardarUsuario}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese contraseña"
            value={eContraseña}
            onChange={(c) => {
              validarLongitud(c.currentTarget.value), guardarContraseña;
            }}
          />
          <Form.Text>{eContraseña}</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={validarUsuario}>
          Iniciar Sesión
        </Button>
      </Form>
    </>
  )
}

export default login
