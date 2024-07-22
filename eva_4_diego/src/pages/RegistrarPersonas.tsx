import React, { useState } from "react";

import { Persona } from "@/Interface/InterfacePersonas";

import { registrarPersona } from "@/firebase/Promesas";

import { Button, Form } from "react-bootstrap";

import Barra from "./Barra";

const initialStatePersona: Persona = {
  nombre: "",
  rut: "",
  apellido: "",
  edad: 0,
  fechaDeNacimiento: "",
  email: "",
};

const RegistrarPersonas = () => {
  const [Persona, setPersona] = useState<Persona>(initialStatePersona);

  const validarLargoMinimo = (name: string, value: string) => {
    setPersona({ ...Persona, [name]: value });
  };

  const registroPersona = () => {
    registrarPersona(Persona)
      .then(() => {
        alert("se registró");
      })
      .catch((error) => {
        alert("no se registró");
        console.log(error);
      });
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            name="nombre"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Apellido"
            name="apellido"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese Edad"
            name="edad"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rut</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Rut"
            name="rut"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese Correo"
            name="correo"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingrese Fecha de Nacimiento"
            name="fechaNacimiento"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </Form.Group>

        <Button variant="success" onClick={registroPersona}>
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default RegistrarPersonas;
