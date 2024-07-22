import React, { useState } from "react";
import { Moto } from "@/Interface/InterfaceMotos";
import { registrarMotos } from "@/firebase/Promesas";
import { Button, Form } from "react-bootstrap";

const initialStateMoto: Moto = {
  marca: "",
  modelo: "",
  cilindrada: 0,
  tipomoto: "",
  fecharegistro: "",
  fechamoto: "",
};

const RegistrarMoto = () => {
  const [moto, setMoto] = useState<Moto>(initialStateMoto);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMoto({ ...moto, [name]: value });
  };

  const registroMoto = () => {
    registrarMotos(moto)
      .then(() => {
        alert("Se registrÃ³ la moto correctamente.");
        setMoto(initialStateMoto);
      })
      .catch((error) => {
        alert("No se pudo registrar la moto.");
        console.log(error);
      });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Marca</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese marca"
          name="marca"
          value={moto.marca}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Modelo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese modelo"
          name="modelo"
          value={moto.modelo}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Cilindrada</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese cilindrada"
          name="cilindrada"
          value={moto.cilindrada}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Tipo de Moto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese tipo de moto"
          name="tipomoto"
          value={moto.tipomoto}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Fecha de Registro</Form.Label>
        <Form.Control
          type="date"
          name="fecharegistro"
          value={moto.fecharegistro}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Fecha de la Moto</Form.Label>
        <Form.Control
          type="date"
          name="fechamoto"
          value={moto.fechamoto}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="success" onClick={registroMoto}>
        Registrar
      </Button>
    </Form>
  );
};

export default RegistrarMoto;