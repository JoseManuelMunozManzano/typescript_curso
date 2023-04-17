import powers from '../data/powers';
// Exportar módulos

// Si el día de mañana cambio la clase, solo se cambia aquí y TS me encarga de avisarme de todos los sitios
// donde tengo que cambiar las llamadas.
export class Hero {
  constructor(public name: string, public powerId: number, public age: number) {}

  get power(): string {
    // Con ? (null check) si la expresión da null retorna undefined y entonces escribe 'not found'
    // Con ! decimos a TS que confie en nosotros, que siempre vamos a tener un valor, no va a retornar null nunca.
    // CONSEJO: No usar ninguno hasta que TS nos indique que deberíamos usarlo.
    return powers.find((power) => power.id === this.powerId)?.desc || 'not found';
  }
}
