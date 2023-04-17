// Esto no es un standard, pero ayuda mucho a reducir el número de importaciones.
// Nos creamos un fichero llamado, de forma obligatoria, index.ts
// Esto es porque el index es lo que se va a cargar de forma predeterminada cuando hacemos referencia a un
// directorio.
// Si el día de mañana Hero cambia de lugar solo tocamos aquí y evitamos así tener que tocar en un montón de sitios.
export { Hero } from './hero';
export { Villain } from './villain';
