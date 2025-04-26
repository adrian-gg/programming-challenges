# Reto #115: Caminos únicos

#### Dificultad: Media

## Enunciado

Hay un robot en una cuadrícula m x n. El robot se encuentra inicialmente en la esquina superior izquierda (es decir, `grid[0][0]`). El robot intenta moverse hasta la esquina inferior derecha (es decir, la `grid[m - 1][n - 1]`). El robot sólo puede moverse hacia abajo o hacia la derecha en cualquier momento.

Dados los números enteros m y n, devuelve el número de caminos posibles que puede seguir el robot para llegar a la esquina inferior derecha.

Ejemplo 1:
![Grid](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

- Input: `m = 3, n = 7`
- Output: 28

Ejemplo 2:

- Input: `m = 3, n = 2`
- Output: 3
  Desde la esquina superior izquierda, hay un total de 3 formas de llegar a la esquina inferior derecha:

1. Derecha -> Abajo -> Abajo
2. Abajo -> Abajo -> Derecha
3. Abajo -> Derecha -> Abajo
