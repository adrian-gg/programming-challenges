# Reto #140: Número super feo

#### Dificultad: Media

## Enunciado

Un número super feo es un número entero positivo cuyos factores primos se encuentran en la matriz primos.

Dado un número entero n y una matriz de enteros primos, devuelve el enésimo número super feo.

Se garantiza que el enésimo número super feo cabe en un entero con signo de 32 bits.

Ejemplo 1
Input: n = 12, primos = [2,7,13,19]
Output: 32
[1,2,4,7,8,13,14,16,19,26,28,32] es la secuencia de los 12 primeros números superfeos dados los primos = [2,7,13,19].

Ejemplo 2:
Input: n = 1, primos = [2,3,5]
Output: 1
1 no tiene factores primos, por lo tanto todos sus factores primos están en la matriz primos = [2,3,5].
