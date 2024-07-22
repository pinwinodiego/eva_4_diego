export interface Moto {
  marca: string;
  modelo: string;
  cilindrada: number;
  tipomoto: string;
  fecharegistro: string;
  fechamoto: string;

  // el ? significa que puede ser opcional
  key?: string;
}
