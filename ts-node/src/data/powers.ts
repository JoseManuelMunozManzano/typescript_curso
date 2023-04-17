// Pueden mezclarse importaciones independientes y exportaciones por defecto
export interface Power {
  id: number;
  desc: string;
}

const powers: Power[] = [
  {
    id: 1,
    desc: 'Money',
  },
  {
    id: 2,
    desc: 'Drugs',
  },
];

// Exportación por defecto
export default powers;
