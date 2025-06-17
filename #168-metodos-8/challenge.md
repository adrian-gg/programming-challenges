# Reto #168: Metodo 8

#### Dificultad: easy

## Enunciado

```
Crea un metodo con el que poder acceder a una propiedad profunda vía string.

Modificar Object.prototype directamente no se recomienda en producción así que como alternativa más segura, puedes definirlo como una función utilitaria.
```

Ejemplo 1:
Input: { a: { b: { c: 42 } } }, "a.b.c"
Output: 42
