import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

import { Persona } from "@/Interface/InterfacePersonas";
import { Moto } from "@/Interface/InterfaceMotos";

// base de datos con personas
export const registrarPersona = async (persona: Persona) => {
  const docRef = await addDoc(collection(db, "personas"), persona);
};
export const mostrarPersona = async (key: string) => {
  const docRef = doc(db, "personas", key);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    let persona: Persona = {
      nombre: docSnapshot.data().nombre,
      apellido: docSnapshot.data().apellido,
      rut: docSnapshot.data().rut,
      edad: docSnapshot.data().edad,
      fechaDeNacimiento: docSnapshot.data().fechaNacimiento,
      email: docSnapshot.data().correo,

      key: docSnapshot.id,
    };
    return persona;
  } else {
    return undefined;
  }
};
export const recuperarPersona = async () => {
  const docRef = collection(db, "personas");

  const querySnapshot = await getDocs(docRef);

  let personas: Persona[] = [];
  querySnapshot.forEach((doc) => {
    let persona: Persona = {
      nombre: doc.data().nombre,
      apellido: doc.data().apellido,
      rut: doc.data().rut,
      edad: doc.data().edad,
      fechaDeNacimiento: doc.data().fechaNacimiento,
      email: doc.data().correo,

      key: doc.id,
    };
    personas.push(persona);
  });
  return personas;
};
export const actualizarPersona = async (p: Persona) => {
  const ref = doc(db, "personas", p.key!);
  await updateDoc(ref, { ...p });
};
export const eliminarPersona = async (p: Persona) => {
  const ref = doc(db, "personas", p.key!);
  await deleteDoc(ref);
};

export const registrarMotos = async (moto: Moto) => {
  const docRef = await addDoc(collection(db, "motos"), moto);
};
export const mostrarMotos = async (key: string) => {
  const docRef = doc(db, "motos", key);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    let moto: Moto = {
      marca: docSnapshot.data().marca,
      modelo: docSnapshot.data().modelo,
      cilindrada: docSnapshot.data().cilindrada,
      tipomoto: docSnapshot.data().tipomoto,
      fecharegistro: docSnapshot.data().fecharegistro,
      fechamoto: docSnapshot.data().fechamoto,
      key: docSnapshot.id,
    };
    return moto;
  } else {
    return undefined;
  }
};
export const RecuperarMoto = async () => {
  const docRef = collection(db, "motos");

  const querySnapshot = await getDocs(docRef);

  let motos: Moto[] = [];
  querySnapshot.forEach((doc) => {
    let moto: Moto = {
      marca: doc.data().marca,
      modelo: doc.data().modelo,
      cilindrada: doc.data().cilindrada,
      tipomoto: doc.data().tipomoto,
      fecharegistro: doc.data().fecharegistro,
      fechamoto: doc.data().fechamoto,
      key: doc.id,
    };
    motos.push(moto);
  });
  return motos;
};
export const actualizarMotos = async (m: Moto) => {
  const ref = doc(db, "motos", m.key!);
  await updateDoc(ref, { ...m });
};
export const eliminarMotos = async (m: Moto) => {
  const ref = doc(db, "motos", m.key!);
  await deleteDoc(ref);
};