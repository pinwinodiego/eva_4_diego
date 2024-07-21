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
        fechaNacimiento: docSnapshot.data().fechaNacimiento,
        correo: docSnapshot.data().correo,
  
        key: docSnapshot.data().id,
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
        fechaNacimiento: doc.data().fechaNacimiento,
        correo: doc.data().correo,
  
        key: doc.id,
      };
      personas.push(persona);
    });
    return persona;
  };
  export const actualizarPersona = async (p: Persona) => {
    const ref = doc(db, "personas", p.key!);
    await updateDoc(ref, { ...p });
  };
  export const eliminarPersona = async (p: Persona) => {
    const ref = doc(db, "personas", p.key!);
    await deleteDoc(ref);
  };