# Reto #108: La dungeon

#### Dificultad: Dificil

## Enunciado

Los demonios han capturado a la princesa y la han encerrado en la esquina inferior derecha de una mazmorra. La mazmorra consta de m x n habitaciones dispuestas en una cuadrícula 2D. Nuestro valiente caballero se situó inicialmente en la sala superior izquierda y debe abrirse camino a través de la mazmorra para rescatar a la princesa.

El caballero tiene un punto de salud inicial representado por un número entero positivo. Si en algún momento su punto de salud cae a 0 o menos, muere inmediatamente.

Algunas de las habitaciones están custodiadas por demonios (representados por enteros negativos), por lo que el caballero pierde salud al entrar en ellas; otras habitaciones están vacías (representadas como 0) o contienen orbes mágicos que aumentan la salud del caballero (representados por enteros positivos).

Para llegar a la princesa lo antes posible, el caballero decide moverse sólo hacia la derecha o hacia abajo en cada paso.

Devuelve la salud inicial mínima al caballero para que pueda rescatar a la princesa.

Ten en cuenta que cualquier habitación puede contener amenazas o potenciadores, incluso la primera habitación en la que entra el caballero y la habitación de abajo a la derecha donde está prisionera la princesa.

Ejemplo 1:
![Dungeon](https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg)

- Input: dungeon = `[[-2, -3, 3],[-5, -10, 1],[10, 30, -5]]`
- Output: 7
  The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.

Ejemplo 2:

- Input: dungeon = [[0]]
- Output: 1
