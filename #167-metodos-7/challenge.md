# Reto #167: Metodo 7

#### Dificultad: medium

## Enunciado

```
Crea un metodo que compare dos objetos profundamente.

Modificar Object.prototype directamente no se recomienda en producción así que como alternativa más segura, puedes definirlo como una función utilitaria.
```

Ejemplo 1:
Input: { a: 1 }, { a: 1 }
Output: true

Ejemplo 2:
Input: { a: 1 }, { a: 2 }
Output: false

Ejemplo 3:
Input: { a: { b: 2 } }, { a: { b: 2 } }
Output: true
