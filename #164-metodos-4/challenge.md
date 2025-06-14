# Reto #164: Metodo 4

#### Dificultad: medium

## Enunciado

```
Crea un metodo que devuelva una función que solo se puede ejecutar una vez. Luego, siempre retorna el mismo resultado. También que acepte un segundo parametro "reset" para reiniciar la función.

Modificar Function.prototype directamente no se recomienda en producción así que como alternativa más segura, puedes definirlo como una función utilitaria.
```

Ejemplo 1:

Input: "Ana"
Output: "Hola Ana", "Saludos a Ana"

Input: "Luis"
Output: "Saludos a Ana"

Input: "Luis", true
Output: "Hola Luis", "Saludos a Luis"

Input: "Mario"
Output: "Saludos a Luis"
