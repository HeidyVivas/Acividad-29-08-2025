export class Clima {
  private temperatura: number;
  private humedad: number;
  private precipitaciones: number;

  constructor(temp: number, humedad: number, precipitaciones: number) {
    this.temperatura = temp;
    this.humedad = humedad;
    this.precipitaciones = precipitaciones;
  }

  cambiarCondiciones(temp: number, humedad: number, precipitaciones: number): void {
    this.temperatura = temp;
    this.humedad = humedad;
    this.precipitaciones = precipitaciones;
    console.log(`Clima cambiado 🌦️ Temp: ${temp}, Humedad: ${humedad}, Precipitaciones: ${precipitaciones}`);
  }

  afectarEcosistema(): void {
    console.log("El clima está afectando al ecosistema 🌍");
  }
}
