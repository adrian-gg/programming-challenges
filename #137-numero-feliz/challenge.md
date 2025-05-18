# Reto #136: Rotando imagen 2

#### Dificultad: Facil

## Enunciado

Escribe un algoritmo para determinar si un número n es feliz.
Un número feliz es un número definido por el siguiente proceso:

- Empezando con cualquier número entero positivo, sustituye el número por la suma de los cuadrados de sus dígitos.
- Repita el proceso hasta que el número sea igual a 1 (donde permanecerá), o haga un bucle infinito en un ciclo que no incluya 1.
- Los números para los que este proceso termina en 1 son felices.

Devuelve verdadero si n es un número feliz, y falso en caso contrario.

Ejemplo 1:
Input: n = 19
Output: true

```
1**2 + 9**2 = 82
8**2 + 2**2 = 68
6**2 + 8**2 = 100
1**2 + 0**2 + 0**2 = 1
```

Ejemplo 2:

Input: n = 2
Output: false
