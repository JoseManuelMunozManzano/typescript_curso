"use strict";
(() => {
    var _a;
    console.log('COMO CREAR OBJETOS CON TIPOS ESPECIFICOS');
    // Para poner un tipo a un objeto lo mejor es crear un type específico o bien una interface. Ambas las veremos luego.
    // Por ahora, se pone el tipo aquí directamente (definición en línea) y tenemos que tener en cuenta las cosas futuras
    // (propiedades y métodos) que querremos añadir a nuestro objeto.
    // Si indicamos que es de tipo Object (let flash: Object = {}), se puede hacer pero queda muy genérico.
    // Es mejor indicar las propiedades y métodos que puede tener.
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    // Como hemos definido nuestro tipo de objeto con el método getName, ahora puede indicarse.
    // Igualmente, como hemos puesto la propiedad age como opcional, puede no informarse aquí. En caso contrario daría error.
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
    // IMPORTANTE: Como el método getName puede ser undefined, es decir, no estar definido al ser opcional, para poder invocarlo correctamente
    // hay que indicarlo así.
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    // PROBLEMA: Si empiezo a crear objetos con esa misma firma, ¿tengo que estar informando ese tipo en cada uno?
    // Ejemplo:
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
    };
    // ¿Y si ahora me dicen que powers ya no va a ser un arreglo de string sino de números? Tengo que estar cambiándolo en todos los sitios.
    // Para evitar este problema se van a crear tipos personalizados.
})();
//# sourceMappingURL=02-objetosTiposEspecificos.js.map