// Los namespaces cada vez se usan menos en cuanto al desarrollo, pero a bajo nivel lo usan muchos frameworks como
// Angular o React con TS y librerías.
// Una función anónima autoinvocada podría considerarse un namespace, pero desde fuera no tenemos acceso a las
// funciones y variables declaradas.
// Un namespace es un agrupador global, como un mini-programa, que tiene toda la lógica que necesita,
// clases, funciones..., y que expondrá al mundo exterior solo aquello que queremos.
namespace Validations {
  console.log('CREANDO UN NAMESPACE');

  // Para poder usar esta función fuera del namespace hay que exportar la función.
  // Es decir, lo que queramos que se vea fuera del namespace hay que indicarlo con la palabra reservada export.
  export const validateText = (text: string): boolean => {
    return text.length > 3;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

// Uso de un namespace
console.log(Validations.validateText('José M.'));
