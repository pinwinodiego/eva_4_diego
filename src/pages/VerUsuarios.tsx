import { recuperarPersona, eliminarPersona } from "@/firebase/Promesas";
import React, { useEffect, useState } from "react";
import { Persona } from "@/Interface/InterfacePersonas";
import { Button, Table, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const MostrarPersonas = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);

  const traerDatos = () => {
    recuperarPersona().then((personas) => {
      console.log(personas);
      setPersonas(personas);
    });
  };

  useEffect(() => {
    traerDatos();
  }, []);

  const handleDelete = () => {
    if (selectedPersona) {
      eliminarPersona(selectedPersona).then(() => {
        setShowModal(false);
        setSelectedPersona(null);
        traerDatos();
      });
    }
  };

  const confirmDelete = (persona: Persona) => {
    setSelectedPersona(persona);
    setShowModal(true);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>RUT</th>
            <th>Edad</th>
            <th>Fecha de Nacimiento</th>
            <th>Email</th>
            <th>Modificar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((p) => (
            <tr key={p.key}>
              <td>{p.nombre}</td>
              <td>{p.apellido}</td>
              <td>{p.rut}</td>
              <td>{p.edad}</td>
              <td>{p.fechaDeNacimiento}</td>
              <td>{p.email}</td>
              <td>
                <Link
                  href={{
                    pathname: "/ModificarPersonas",
                    query: { key: p.key },
                  }}
                >
                  <Button variant="success" >
                    <FaEdit />
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => confirmDelete(p)}>
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar a la persona{" "}
          {selectedPersona?.nombre} {selectedPersona?.apellido}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MostrarPersonas;