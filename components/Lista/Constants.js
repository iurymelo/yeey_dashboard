export const columns = [
  { id: 'nome', label: 'Nome', },
  { id: 'id', label: '#ID',align: 'right'  },
  { id: 'plano', label: 'Plano', align: 'right' },
  {},
  {}
];

function createData(nome, id, plano) {
  return { nome, id, plano };
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
