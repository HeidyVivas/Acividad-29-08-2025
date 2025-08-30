import { SerVivo } from "./SerVivo";

export class Planta extends SerVivo {
  private altura: number;
  private cantidadHojas: number;
  private tasaFotosintesis: number;

  constructor(nombre: string, edad: number, energia: number, altura: number, hojas: number, tasa: number) {
    super(nombre, edad, energia);
    this.altura = altura;
    this.cantidadHojas = hojas;
    this.tasaFotosintesis = tasa;
  }

  crecer(): void {
    this.altura += 0.5;
    this.cantidadHojas += 2;
    console.log(`${this.nombre} creció 🌱 Altura: ${this.altura}`);
  }

  consumirRecursos(): void {
    this.energia += this.tasaFotosintesis;
    console.log(`${this.nombre} realizó fotosíntesis. Energía: ${this.energia}`);
  }

  reproducirse(): SerVivo | null {
    if (this.energia > 40) {
      this.energia -= 20;
      console.log(`${this.nombre} produjo una nueva planta 🌿`);
      return new Planta(this.nombre + " Jr", 0, 20, 0.3, 5, this.tasaFotosintesis);
    }
    return null;
  }

  morir(): boolean {
    if (this.energia <= 0 || this.edad > 50) {
      console.log(`${this.nombre} se secó 🪴`);
      return true;
    }
    return false;
  }

  fotosintesis(): void {
    this.energia += this.tasaFotosintesis;
    console.log(`${this.nombre} hizo fotosíntesis ☀️`);
  }

  serComida(): void {
    this.energia -= 15;
    console.log(`${this.nombre} fue comida por un herbívoro 🐇`);
  }
}
