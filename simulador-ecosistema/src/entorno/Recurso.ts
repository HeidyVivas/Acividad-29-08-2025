export class Recurso {
  private tipo: "agua" | "minerales" | "luz solar";
  private cantidad: number;

  constructor(tipo: "agua" | "minerales" | "luz solar", cantidad: number) {
    this.tipo = tipo;
    this.cantidad = cantidad;
  }

  consumirse(cantidad: number): void {
    this.cantidad = Math.max(0, this.cantidad - cantidad);
    console.log(`Se consumió ${cantidad} de ${this.tipo}. Queda: ${this.cantidad}`);
  }

  regenerarse(cantidad: number): void {
    this.cantidad += cantidad;
    console.log(`${this.tipo} se regeneró en ${cantidad}. Total: ${this.cantidad}`);
  }

  getCantidad(): number {
    return this.cantidad;
  }
}
  