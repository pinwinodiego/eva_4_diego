import React, { useEffect, useState } from "react";
import { RecuperarMoto, eliminarMotos } from "@/firebase/Promesas";
import { Moto } from "@/Interface/InterfaceMotos";
import { Button, Table, Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const MostrarMotos = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState<Moto | null>(null);

  const traerDatos = () => {
    RecuperarMoto().then((motos) => {
      setMotos(motos);
    }).catch((error) => {
      console.error("Error al recuperar las motos:", error);
    });
  };

  useEffect(() => {
    traerDatos();
  }, []);

  const handleDelete = () => {
    if (selectedMoto) {
      eliminarMotos(selectedMoto).then(() => {
        setShowModal(false);
        setSelectedMoto(null);
        traerDatos();
      }).catch((error) => {
        console.error("Error al eliminar la moto:", error);
      });
    }
  };

  const confirmDelete = (moto: Moto) => {
    setSelectedMoto(moto);
    setShowModal(true);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cilindrada</th>
            <th>Tipo de Moto</th>
            <th>Fecha de Registro</th>
            <th>Fecha de la Moto</th>
            <th>Modificar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {motos.map((m) => (
            <tr key={m.key}>
              <td>{m.marca}</td>
              <td>{m.modelo}</td>
              <td>{m.cilindrada}</td>
              <td>{m.tipomoto}</td>
              <td>{m.fecharegistro}</td>
              <td>{m.fechamoto}</td>
              <td>
                <Link
                  href={{
                    pathname: "/ModificarMoto",
                    query: { key: m.key },
                  }}
                >
                  <Button variant="success" href="/VerMotos">
                    <FaEdit />
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => confirmDelete(m)}>
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
          ¿Estás seguro de que deseas eliminar la moto {selectedMoto?.marca}?
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

export default MostrarMotos;