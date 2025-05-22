# Reto #142: Globos reventados

#### Dificultad: Hard

## Enunciado

Se le dan n globos, indexados de 0 a n - 1. Cada globo está pintado con un número representado por una matriz nums. Se le pide que reviente todos los globos.

Si revientas el globo i, obtendrás monedas nums[i - 1] _ nums[i] _ nums[i + 1]. Si i - 1 o i + 1 se sale de los límites de la matriz, entonces trátalo como si hubiera un globo con un 1 pintado en él.

Devuelve el máximo de monedas que puedes recoger reventando los globos sabiamente.

Ejemplo 1:
Input: nums = [3,1,5,8]
Output: 167
números = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
monedas = 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 167

Ejemplo 2:
Input: nums = [1,5]
Output: 10
