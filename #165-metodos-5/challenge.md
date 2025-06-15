# Reto #165: Metodo 5

#### Dificultad: easy

## Enunciado

```
Crea un metodo que extraiga solo las claves indicadas en un nuevo objeto.

Modificar Object.prototype directamente no se recomienda en producción así que como alternativa más segura, puedes definirlo como una función utilitaria.
```

Ejemplo 1:
Input: { a: 1, b: 2, c: 3 }, ["a", "c"]
Output: {a:1, c:3}

Ejemplo 2:
Input: { a: 1, b: 2, c: 3 }, ["a", "d", "e"]
Output: { a: 1 }
