import { SerVivo } from "./SerVivo";

export class Animal extends SerVivo {
  private tipo: "herbívoro" | "carnívoro" | "omnívoro";
  private velocidad: number;
  private fuerza: number;

  constructor(nombre: string, edad: number, energia: number,
              tipo: "herbívoro" | "carnívoro" | "omnívoro", velocidad: number, fuerza: number) {
    super(nombre, edad, energia);
    this.tipo = tipo;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }

  crecer(): void {
    this.edad++;
    this.energia -= 5;
    console.log(`${this.nombre} creció. Edad: ${this.edad}`);
  }

  consumirRecursos(): void {
    this.energia -= 10;
    console.log(`${this.nombre} consumió recursos. Energía: ${this.energia}`);
  }

  reproducirse(): SerVivo | null {
    if (this.energia > 50) {
      this.energia -= 20;
      console.log(`${this.nombre} se reprodujo 🐾`);
      return new Animal(this.nombre + " Jr", 0, 30, this.tipo, this.velocidad, this.fuerza);
    }
    return null;
  }

  morir(): boolean {
    if (this.energia <= 0 || this.edad > 20) {
      console.log(`${this.nombre} murió 💀`);
      return true;
    }
    return false;
  }

  moverse(): void {
    this.energia -= 5;
    console.log(`${this.nombre} se movió. Energía: ${this.energia}`);
  }

  comer(): void {
    this.energia += 15;
    console.log(`${this.nombre} comió. Energía: ${this.energia}`);
  }

  cazar(): void {
    if (this.tipo === "carnívoro") {
      this.energia += 25;
      console.log(`${this.nombre} cazó con éxito 🦁`);
    }
  }

  huir(): void {
    this.energia -= 10;
    console.log(`${this.nombre} huyó para sobrevivir 🏃`);
  }
}
