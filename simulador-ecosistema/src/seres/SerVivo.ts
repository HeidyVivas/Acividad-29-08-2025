export abstract class SerVivo {
  protected nombre: string;
  protected edad: number;
  protected energia: number;

  constructor(nombre: string, edad: number, energia: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.energia = energia;
  }

  abstract crecer(): void;
  abstract consumirRecursos(): void;
  abstract reproducirse(): SerVivo | null;
  abstract morir(): boolean;

  getNombre(): string {
    return this.nombre;
  }

  getEnergia(): number {
    return this.energia;
  }

  setEnergia(valor: number): void {
    this.energia = Math.max(0, valor);
  }
}
