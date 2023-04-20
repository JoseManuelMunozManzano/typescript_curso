// Decorador hecho como función tradicional
// El objetivo es crear un decorador que bloquea la expansión de un prototipo en una clase.
export const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};
