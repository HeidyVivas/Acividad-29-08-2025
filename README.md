# TypeScript y Programación Orientada a Objetos (POO)

## 1. ¿Qué es TypeScript y en qué se diferencia de JavaScript?
TypeScript es un **superset de JavaScript** desarrollado por Microsoft que añade **tipado estático y características avanzadas** de orientación a objetos.  
Se diferencia de JavaScript en que:
- Permite definir tipos (`string`, `number`, `boolean`, etc.).
- Incluye interfaces, modificadores de acceso, herencia, clases abstractas.
- Se compila a **JavaScript puro**, lo que asegura compatibilidad con navegadores y Node.js.

---

## 2. ¿Qué ventajas ofrece TypeScript para trabajar con POO?
- Tipado estático: ayuda a detectar errores en tiempo de compilación.
- Mejor soporte para **clases, interfaces, herencia y polimorfismo**.
- Código más legible y mantenible.
- Autocompletado y documentación integrada en editores como VS Code.

---

## 3. Modificadores de acceso (`public`, `private`, `protected`)
- **public**: accesible desde cualquier parte.
- **private**: accesible solo dentro de la clase.
- **protected**: accesible dentro de la clase y sus subclases.

```ts
class Persona {
  public nombre: string;
  private edad: number;
  protected dni: string;

  constructor(nombre: string, edad: number, dni: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
  }
}
```

---

## 4. ¿Qué es un `readonly` y para qué se usa?
Es un modificador que permite declarar propiedades que **solo pueden ser asignadas una vez**, normalmente en el constructor.  

```ts
class Config {
  readonly version: string = "1.0.0";
}
```

---

## 5. ¿Cómo se definen clases y objetos en TS?
```ts
class Animal {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const perro = new Animal("Firulais");
```

---

## 6. ¿Qué son los constructores y para qué sirven?
Son métodos especiales que se ejecutan al crear un objeto, inicializando sus propiedades.  

```ts
class Usuario {
  constructor(public nombre: string, public correo: string) {}
}
```

---

## 7. ¿Qué es la herencia en TS y cómo se implementa?
La **herencia** permite que una clase (hija) herede atributos y métodos de otra (padre).  
Se implementa con `extends` y se inicializa con `super`.

```ts
class Animal {
  constructor(public nombre: string) {}
}

class Perro extends Animal {
  ladrar() {
    return `${this.nombre} dice: ¡Guau!`;
  }
}

const perro = new Perro("Toby");
```

---

## 8. ¿Qué significa polimorfismo en TS?
Es la capacidad de que una misma función/método se comporte de distintas formas según la clase que lo implemente.  

```ts
class Animal { sonido(): string { return "Sonido genérico"; } }
class Perro extends Animal { sonido(): string { return "Guau"; } }
class Gato extends Animal { sonido(): string { return "Miau"; } }
```

---

## 9. ¿Qué son las clases abstractas?
- Son clases que **no pueden instanciarse directamente**.
- Sirven como **plantilla** para que otras clases las implementen.
- Pueden tener métodos abstractos (sin implementación).

```ts
abstract class Figura {
  abstract area(): number;
}
```

---

## 10. ¿Qué es una `interface` en TS y diferencia con clase abstracta?
- Una **interface** define un contrato (qué propiedades/métodos debe tener una clase).
- No genera código en la compilación (es solo para tipado).
- Una **clase abstracta** sí puede incluir implementación parcial y genera código JavaScript.

```ts
interface Vehiculo {
  velocidad: number;
  mover(): void;
}

class Coche implements Vehiculo {
  velocidad = 100;
  mover() { console.log("El coche se mueve"); }
}
```

---

## 11. Ejemplo mínimo de cada pilar de POO en TS
- **Encapsulación**: `private edad: number;`
- **Abstracción**: `abstract class Figura { abstract area(): number; }`
- **Herencia**: `class Perro extends Animal {}`
- **Polimorfismo**: `animal.sonido(); // Puede ser "Guau" o "Miau"`
