const input = [
  { id: "aaa" },
  { id: "bbb", parent: "aaa" },
  { id: "ccc", parent: "aaa" },
  { id: "ddd", parent: "ccc" },
  { id: "eee", parent: "ddd" },
  { id: "fff", parent: "ddd" },
  { id: "ggg", parent: "fff" },
];

const result = {
  id: "aaa",
  children: [
    { id: "bbb", children: [] },
    {
      id: "ccc",
      children: [
        {
          id: "ddd",
          children: [
            { id: "eee", children: [] },
            { id: "fff", children: [{ id: "ggg", children: [] }] },
          ],
        },
      ],
    },
  ],
};

function makeTree(arr) {
  let map = {}

  input.forEach((item) => {
    if (!item.parent) {
      map = {
        id: item.id,
        children: []
      }
    }
  })

  function setChildren(parent) {
    let childrens = []
    input.forEach((item) => {
      if (parent.id === item.parent) {
        childrens.push({
          id: item.id,
          children: setChildren({ id: item.id}),
        }); 
        parent.children = childrens;
      }
    })
    return childrens;
  }

  setChildren(map);

  return map
}

console.log(JSON.stringify(makeTree(input)));;