# Reto #160: Cifrado cesar 2

#### Dificultad: Fácil

## Enunciado

```
Crea un programa que realize el cifrado César de un texto y lo imprima.
También debe ser capaz de descifrarlo cuando así se lo indiquemos.

El listado de letras en rotación ha de contener tambien el caracter " ". "abcdefghijklmn opqrstuvwxyz" por ejemplo.
Cada indice de las letras del texto deberá sumarse a la rotación.
```

Ejemplo 1:
chars = "abcdefghijklmn opqrstuvwxyz"
Input: text = "abc", rotation = 1, decrypt = false
Output: "bdf"

Ejemplo 2:
chars = "abcdefghijklmn opqrstuvwxyz"
Input: text = "bdf", rotation = 1, decrypt = true
Output: "abc"

Ejemplo 3:
chars = "abcdefghijklmn opqrstuvwxyz"
Input: text = "hola mundo", rotation = 2, decrypt = false
Output: "jroftscvnz"
