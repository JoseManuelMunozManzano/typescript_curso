"use strict";
const msg = 'Hola mundo!';
const hero = {
    name: 'Iron Man',
    age: 45,
};
console.log(hero);
(() => {
    console.log('INFERIR TIPOS Y MODO ESTRICTO');
    const a = 10;
    let b = 10;
    const a1 = 10;
    let b1 = 10;
    let b2;
    b2 = 3.1416;
    b2 = {};
    b2 = [];
    b2 = true;
    function sayHello(msg) {
        console.log(msg + ' ' + 'José');
    }
})();
(() => {
    console.log('BOOLEANOS');
    let isSuperman = true;
    console.log({ isSuperman });
    let isBatman = false;
    console.log({ isBatman });
})();
(() => {
    console.log('NUMBERS');
    let avengers;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    console.log('STRINGS');
    const batman = 'Batman';
    const linternaVerde = "Linterna 'Verde'";
    const volcanoNegro = `Héroe: Volcán Negro`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(batman.toLocaleUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    console.log('ANY');
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.234353;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
    avenger = 'Spiderman';
    console.log(avenger.charAt(0));
    avenger = 23.456;
    console.log(avenger.toFixed(2));
})();
(() => {
    console.log('ARREGLOS');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers2 = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers2.push(11);
    console.log(numbers2);
    const numbers3 = [1, 2, 3, 4, 5, '6', 7];
    numbers3.push(true);
    console.log(numbers3);
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    console.log('TUPLAS');
    const hero = ['Dr. Strange', 100];
    hero[0] = 'Iron Man';
    hero[1] = 50;
    console.log(hero);
    const hero2 = ['Spiderman', 120, true];
    console.log(hero2);
})();
(() => {
    console.log('ENUMERACIONES');
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    let AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 1] = "min";
        AudioLevel2[AudioLevel2["medium"] = 2] = "medium";
        AudioLevel2[AudioLevel2["max"] = 10] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
    let currentAudio2 = AudioLevel2.medium;
    console.log(currentAudio2);
    console.log(AudioLevel2.max);
})();
(() => {
    console.log('VOID');
    function callBatman() { }
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
        return;
    };
})();
(() => {
    console.log('NEVER');
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!!');
    console.log('No me voy a ejecutar');
    const posibleError = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
})();
(() => {
    console.log('NULL Y UNDEFINED');
    let nada = undefined;
    console.log(nada);
    let nadaNumber = undefined;
    console.log(nadaNumber);
    let isActive = undefined;
    console.log(isActive);
    let isActive2 = undefined;
})();
(() => {
    console.log('TAREA');
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    console.log('FUNCIONES BASICAS');
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    console.log('PARAMETROS OBLIGATORIOS DE LAS FUNCIONES');
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Startk');
    console.log({ name });
    let noName;
    const name2 = fullName(noName, 'Stark');
})();
(() => {
    console.log('PARAMETROS OPCIONALES DE LAS FUNCIONES');
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    console.log('PARAMETROS POR DEFECTO');
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || '-----'}`.toUpperCase();
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
    const name2 = fullName('Tony', 'Manero', true);
    console.log({ name2 });
})();
(() => {
    console.log('PARAMETROS RESTS');
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    console.log('TIPO FUNCION');
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('José M.'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
console.log('TAREA');
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    console.log('OBJETOS BASICOS');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name2: 'Otro nombre',
    };
    flash = {
        name: 'Clark Kent',
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getNombre() {
            return this.name;
        },
    };
})();
(() => {
    var _a;
    console.log('COMO CREAR OBJETOS CON TIPOS ESPECIFICOS');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
    };
})();
(() => {
    console.log('TIPOS PERSONALIZADOS');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    console.log('MULTIPLES TIPOS PERMITIDOS');
    let myCustomVariable = 'José M.';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    console.log('TAREA');
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        },
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
//# sourceMappingURL=main.js.map