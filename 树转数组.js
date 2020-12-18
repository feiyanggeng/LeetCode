const input = {
  id: 'aaa',
  children: [
    {
      id: 'bbb',
      children: []
    },
    {
      id: 'ccc',
      children: [
        {
          id: 'ddd',
          children: [
            {
              id: 'eee',
              children: []
            },
            {
              id: 'fff',
              children: [
                {
                  id: 'ggg',
                  children:[]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function treeToArr(tree) {
  let result = [
    {
      id: tree.id
    }
  ];
  function setItem(parent, children) {
    if (children.length === 0) return
    children.forEach(item => {
      result.push({
        id: item.id,
        parent,
      });
      setItem(item.id, item.children);
    })
  }

  setItem(tree.id, tree.children);

  return result
}

console.log(JSON.stringify(treeToArr(input)));