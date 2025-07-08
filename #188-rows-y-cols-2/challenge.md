# Reto #185: Cuadrado mágico 2

#### Dificultad: medium

## Enunciado

Se le da una rejilla de matriz binaria de m x n.

Un movimiento consiste en elegir cualquier fila o columna y alternar cada valor en esa fila o columna (es decir, cambiar todos los 0 a 1, y todos los 1 a 0).

Cada fila de la matriz se interpreta como un número binario, y la puntuación de la matriz es la suma de estos números.

Devuelve la puntuación más alta posible después de realizar cualquier número de movimientos (incluidos los movimientos nulos).

Ejemplo 1:
![alt text](https://assets.leetcode.com/uploads/2021/07/23/lc-toogle1.jpg)
Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

Ejemplo 2:
Input: grid = [[0]]
Output: 1
