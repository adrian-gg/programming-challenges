# Reto #148: Validador de sudokus

#### Dificultad: medium

## Enunciado

Determine si un tablero de Sudoku de 9 x 9 es válido. Sólo hay que validar las celdas rellenas según las siguientes reglas:

1. Cada fila debe contener los dígitos 1-9 sin repetición.
2. Cada columna debe contener los dígitos 1-9 sin repetición.
3. Cada una de las nueve subcajas de 3 x 3 de la cuadrícula debe contener los dígitos 1-9 sin repetición.

Nota:

- Un tablero de Sudoku (parcialmente rellenado) podría ser válido pero no es necesariamente solucionable.
- Sólo las casillas rellenas deben ser validadas según las reglas mencionadas.

Ejemplo 1:

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Ejemplo 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
