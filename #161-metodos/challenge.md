# Reto #161: Metodo

#### Dificultad: easy

## Enunciado

```
Crea un metodo para un objeto que cambie las claves del objeto según un mapeo.
Object.prototype.renameKeys(mapper)

Modificar Object.prototype directamente no se recomienda en producción, porque puede causar conflictos con otras librerías o con estructuras como for...in. Como alternativa más segura, puedes definirlo como una función utilitaria
```

Ejemplo:
Input: {a: 1, b: 2}.renameKeys({a: "x"})
Output: {x: 1, b: 2}
