# Reto #169: Metodo 9

#### Dificultad: easy

## Enunciado

Crea un metodo que convierta una lista plana en árbol jerárquico.

Modificar Object.prototype directamente no se recomienda en producción así que como alternativa más segura, puedes definirlo como una función utilitaria.

Ejemplo:
Input:

```
[
  { id: 1, name: "Root" },
  { id: 2, name: "Child 1", parentId: 1 },
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Subchild", parentId: 2 },
]
```

Output:

```
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
```
