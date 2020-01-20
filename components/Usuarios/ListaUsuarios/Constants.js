export const columns = [
  { id: 100, label: 'Nome' },
  { id: 110, label: '#ID', align: 'right'  },
  { id: 120, label: 'Tipo de Conta', align: 'right' },
  {id: 121},
  {id: 122}
];

export function createData(nome, id, tipoConta) {
  return { nome, id, tipoConta };
}

export const rows = [
  createData('Cupcake', 1, 'Tester'),
  createData('Donut', 2, 'Tester'),
  createData('Eclair', 3, 'Tester'),
  createData('Frozen yoghurt', 4, 'Tester'),
  createData('Gingerbread', 5, 'Tester'),
  createData('Honeycomb', 6, 'Tester'),
  createData('Ice cream sandwich', 237, 'Tester'),
  createData('Jelly Bean', 7, 'Tester'),
  createData('KitKat', 8, 'Tester'),
  createData('Lollipop', 9, 'Tester'),
  createData('Marshmallow', 10, 'Tester'),
  createData('Nougat', 11, 'Tester'),
  createData('Oreo', 12, 'Tester'),
];

