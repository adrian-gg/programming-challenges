# Reto #143: Game of life

#### Dificultad: Medium

## Enunciado

Según el artículo de Wikipedia «El Juego de la Vida, también conocido simplemente como Vida, es un autómata celular ideado por el matemático británico John Horton Conway en 1970».

El tablero está formado por una cuadrícula de m x n celdas, donde cada celda tiene un estado inicial: viva (representada por un 1) o muerta (representada por un 0). Cada celda interactúa con sus ocho vecinas (horizontales, verticales y diagonales) siguiendo las cuatro reglas siguientes (extraídas del citado artículo de Wikipedia):

1. Cualquier célula viva con menos de dos vecinas vivas muere como si se tratara de una infrapoblación.
2. Toda célula viva con dos o tres vecinos vivos pasa a la siguiente generación.
3. Cualquier célula viva con más de tres vecinos vivos muere, como si fuera por superpoblación.
4. Cualquier célula muerta con exactamente tres vecinas vivas se convierte en una célula viva, como si fuera por reproducción.

El siguiente estado del tablero se determina aplicando las reglas anteriores simultáneamente a cada célula del estado actual del tablero de m x n casillas. En este proceso, los nacimientos y las muertes se producen simultáneamente.

Dado el estado actual del tablero, actualice el tablero para reflejar su siguiente estado.

Tenga en cuenta que no necesita devolver nada.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
