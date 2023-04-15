"use strict";
(() => {
    console.log('PARAMETROS POR DEFECTO');
    // Con lo que tenemos ahora mismo, el primer argumento es obligatorio, el segundo opcional y el tercero
    // es obligatorio.
    // TS nos indica que una propiedad requerida no puede seguir a una opcional.
    // Esto es genial, porque los argumentos opcionales siempre deben ir al final, porque al llamar a este función
    // con 2 argumentos, ¿quería usar el primer y segundo parámetro o el primero y el tercero?
    // De nuevo, en JS no hay ningún problema, lo que da lugar a muchos errores.
    //
    // const fullName = (firstName: string, lastName?: string, upper: boolean): string => {
    //
    // Para establecer un valor por defecto se indica: variable: tipo = valor_por_defecto.
    // Al establecer un valor por defecto desaparece el error de TS porque ahora, si no se manda, ya tenemos un valor.
    // NOTA: Un parámetro con valor por defecto se transforma en argumento opcional, y no requiere usar ?
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
//# sourceMappingURL=04-paramDefecto.js.map