// Exportar módulos

// Si el día de mañana cambio la clase, solo se cambia aquí y TS me encarga de avisarme de todos los sitios
// donde tengo que cambiar las llamadas.
export class Hero {
  constructor(public name: string, public powerId: number, public age: number) {}
}
