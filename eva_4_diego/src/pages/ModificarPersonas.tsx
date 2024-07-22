import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Persona } from "@/Interface/InterfacePersonas";
import { mostrarPersona, actualizarPersona } from "@/firebase/Promesas";
import { Button, Form } from "react-bootstrap";

const initialStatePersona: Persona = {
  nombre: "",
  apellido: "",
  rut: "",
  edad: 0,
  fechaDeNacimiento: "",
  email: "",
  key: "",
};

const ModificarPersona = () => {
  const router = useRouter();
  const { key } = router.query;
  const [persona, setPersona] = useState<Persona>(initialStatePersona);

  useEffect(() => {
    if (key) {
      mostrarPersona(key as string).then((data) => {
        if (data) {
          setPersona(data);
        }
      });
    }
  }, [key]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersona({ ...persona, [name]: value });
  };

  const handleSubmit = () => {
    actualizarPersona(persona)
      .then(() => {
        alert("Persona actualizada exitosamente");
        router.push("/VerUsuarios"); // Redirige a la lista de personas
      })
      .catch((error) => {
        console.error("Error al actualizar persona:", error);
      });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={persona.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          value={persona.apellido}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>RUT</Form.Label>
        <Form.Control
          type="text"
          name="rut"
          value={persona.rut}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="number"
          name="edad"
          value={persona.edad}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control
          type="date"
          name="fechaDeNacimiento"
          value={persona.fechaDeNacimiento}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={persona.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="success" onClick={handleSubmit}>
        Actualizar
      </Button>
    </Form>
  );
};

export default ModificarPersona;