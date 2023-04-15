(() => {
  console.log('ENUMERACIONES');

  // Este tipo de dato, al igual que las tuplas, solo existe en TS.
  // Las enumeraciones ayudan a trabajar con valores que tengan un valor semántico (fácil de leer)
  // En las enumeraciones los nombres de las variables empiezan por mayúscula (upper camel case).
  enum AudioLevel {
    min, // 0
    medium, // 1
    max, // 2
  }

  let currentAudio = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);

  // Se pueden indicar los valores numéricos que me interesan.
  enum AudioLevel2 {
    min = 1,
    medium, // 2, el siguiente al anterior
    max = 10,
  }

  let currentAudio2 = AudioLevel2.medium;
  console.log(currentAudio2);
  console.log(AudioLevel2.max);
})();
