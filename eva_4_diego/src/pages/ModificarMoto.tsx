import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Moto } from "@/Interface/InterfaceMotos";
import { mostrarMotos, actualizarMotos } from "@/firebase/Promesas";

const ModificarMoto = () => {
  const router = useRouter();
  const { key } = router.query;
  const [moto, setMoto] = useState<Moto | null>(null);

  useEffect(() => {
    if (key && typeof key === "string") {
      mostrarMotos(key).then((m) => {
        if (m) {
          setMoto(m);
        } else {
          console.error("Moto no encontrada");
        }
      });
    }
  }, [key]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (moto) {
      const { name, value } = e.target;
      setMoto({ ...moto, [name]: name === 'cilindrada' ? parseInt(value) : value });
    }
  };

  const handleUpdate = () => {
    if (moto) {
      actualizarMotos(moto)
        .then(() => {
          alert("Moto actualizada correctamente");
          router.push("/VerMotos");
        })
        .catch((error) => {
          console.error("Error al actualizar la moto:", error);
          alert("OcurriÃ³ un error al actualizar la moto. Por favor, intenta nuevamente.");
        });
    }
  };

  if (!moto) return <div>Cargando...</div>;

  return (
    <>
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

        <Button variant="success" onClick={handleUpdate}>
          Modificar
        </Button>
      </Form>
    </>
  );
};

export default ModificarMoto;