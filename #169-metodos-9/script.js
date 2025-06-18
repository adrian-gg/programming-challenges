function toTree(items, idKey = "id", parentKey = "parentId") {
  const lookup = {}
  const tree = []

  for (const item of items) {
    const id = item[idKey]
    lookup[id] = { ...item, children: [] }
  }

  for (const item of items) {
    const parentId = item[parentKey]
    const node = lookup[item[idKey]]
    if (parentId == null || !lookup[parentId]) {
      tree.push(node)
    } else {
      lookup[parentId].children.push(node)
    }
  }

  return tree
}

const flat = [
  { id: 1, name: "Root" },
  { id: 2, name: "Child 1", parentId: 1 },
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Subchild", parentId: 2 },
]

console.log(JSON.stringify(toTree(flat), null, 2))
/*
[
  {
    "id": 1,
    "name": "Root",
    "children": [
      {
        "id": 2,
        "name": "Child 1",
        "parentId": 1,
        "children": [
          {
            "id": 4,
            "name": "Subchild",
            "parentId": 2,
            "children": []
          }
        ]
      },
      {
        "id": 3,
        "name": "Child 2",
        "parentId": 1,
        "children": []
      }
    ]
  }
]
*/
