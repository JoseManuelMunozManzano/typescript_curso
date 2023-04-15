"use strict";
(() => {
    console.log('ENUMERACIONES');
    // Este tipo de dato, al igual que las tuplas, solo existe en TS.
    // Las enumeraciones ayudan a trabajar con valores que tengan un valor semántico (fácil de leer)
    // En las enumeraciones los nombres de las variables empiezan por mayúscula (upper camel case).
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    // Se pueden indicar los valores numéricos que me interesan.
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
