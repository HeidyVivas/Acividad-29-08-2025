import * as readline from "readline-sync";
import { Clima }from "./entorno/Clima";
import { Recurso }from "./entorno/Recurso";
import { Ecosistema } from "./Ecosistema";
import { Animal } from "./seres/Animal";
import { Planta } from "./seres/Planta";
// Inicializar ecosistema con clima y recursos
const clima = new Clima(25, 60, 5);
const agua = new Recurso("agua", 100);
const minerales = new Recurso("minerales", 50);

const ecosistema = new Ecosistema(clima, [agua, minerales]);

// 🌱 Funciones auxiliares
function crearAnimal() {
  const nombre = readline.question("Nombre del animal: ");
  const tipo = readline.question("Tipo (herbivoro, carnivoro, omnivoro): ");
  const velocidad = readline.questionInt("Velocidad: ");
  const fuerza = readline.questionInt("Fuerza: ");
  const animal = new Animal(nombre, 0, 100, "carnívoro", velocidad, fuerza);
  ecosistema.agregarAnimal(animal);
  console.log(`✅ Animal ${nombre} agregado al ecosistema.`);
}

function crearPlanta() {
  const nombre = readline.question("Nombre de la planta: ");
  const altura = readline.questionInt("Altura inicial: ");
  const hojas = readline.questionInt("Cantidad de hojas: ");
  const tasa = readline.questionInt("Tasa de fotosintesis: ");
  const planta = new Planta(nombre, 0, 50, altura, hojas, tasa);
  ecosistema.agregarPlanta(planta);
  console.log(`✅ Planta ${nombre} agregada al ecosistema.`);
}

function cambiarClima() {
  const temp = 25;
  const humedad = 60;
  const precipitaciones = "moderada";
  console.log("🌦️ Clima actualizado en el ecosistema.");
}

// 🎮 Menú principal
function menu() {
  let opcion = "";
  do {
    console.log("\n=== 🌍 SIMULADOR DE ECOSISTEMA ===");
    console.log("1. Agregar animal");
    console.log("2. Agregar planta");
    console.log("3. Cambiar clima");
    console.log("4. Simular ciclo del ecosistema");
    console.log("5. Salir");
    opcion = readline.question("Seleccione una opcion: ");

    switch (opcion) {
      case "1":
        crearAnimal();
        break;
      case "2":
        crearPlanta();
        break;
      case "3":
        cambiarClima();
        break;
      case "4":
        ecosistema.simularCiclo();
        break;
      case "5":
        console.log("👋 Saliendo del simulador...");
        break;
      default:
        console.log("❌ Opcion no valida, intente de nuevo.");
    }
  } while (opcion !== "5");
}

// Ejecutar menú
menu();
