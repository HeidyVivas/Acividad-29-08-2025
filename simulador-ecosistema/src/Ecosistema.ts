import { Animal } from "./seres/Animal";
import { Planta } from "./seres/Planta";
import { Clima }from "./entorno/Clima";
import { Recurso }from "./entorno/Recurso";

export class Ecosistema {
  private animales: Animal[] = [];
  private plantas: Planta[] = [];
  private clima: Clima;
  private recursos: Recurso[];

  constructor(clima: Clima, recursos: Recurso[]) {
    this.clima = clima;
    this.recursos = recursos;
  }

  agregarAnimal(animal: Animal): void {
    this.animales.push(animal);
  }

  agregarPlanta(planta: Planta): void {
    this.plantas.push(planta);
  }

  cambiarClima(clima: Clima): void {
    this.clima = clima;
  }

  simularCiclo(): void {
    console.log("\n=== CICLO DEL ECOSISTEMA ===");

    this.clima.afectarEcosistema();

    this.plantas.forEach((p) => {
      p.fotosintesis();
      p.crecer();
    });

    this.animales.forEach((a) => {
      a.moverse();
      a.consumirRecursos();
      if (a.morir()) {
        console.log(`${a.getNombre()} ya no está en el ecosistema 💀`);
      }
    });

    this.recursos.forEach((r) => {
      r.regenerarse(5);
    });

    console.log("=== Fin del ciclo ===\n");
  }
}
