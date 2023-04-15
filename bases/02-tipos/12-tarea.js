"use strict";
(() => {
    console.log('TAREA');
    // Indicar los tipos de TS. Ser lo más específicos posible.
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAquaman = Fuerza.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
