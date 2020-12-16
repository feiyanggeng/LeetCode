const input = [
  {
    id: "eee",
    parent: "ddd",
  },
  {
    id: "bbb",
    parent: "aaa",
  },
  {
    id: "aaa",
  },
  {
    id: "ccc",
    parent: "bbb",
  },
  {
    id: "ddd",
    parent: "bbb",
  },
];

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