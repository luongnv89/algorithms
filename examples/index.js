const { JSBTree } = require('../data_structs/JSBTree');

const comparator = (elm1, elm2) => {
  if (elm1.id === elm2.id) return 1;
  if (elm1.id > elm2.id) return 0;
  return 2;
};

const bTree = new JSBTree(comparator);
bTree.add({ id: 15 });
bTree.add({ id: 1 });
bTree.add({ id: 115 });
bTree.add({ id: 150 });
bTree.add({ id: 125 });
bTree.findELementByValue({ id: 10 });