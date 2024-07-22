export interface Persona {
    nombre: string;
    rut: string;    
    apellido: string;
    edad: number;
    fechaDeNacimiento: string;
    email: string;
  
    // el ? significa que puede ser opcional
    key?: string;
  }
  