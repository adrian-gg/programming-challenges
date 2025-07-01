# Reto #181: Walking robot simulation 3

#### Dificultad: medium

## Enunciado

Hay una cuadrícula n x n, con la celda superior izquierda en (0, 0) y la celda inferior derecha en (n - 1, n - 1). Se le da el número entero n y un array entero startPos donde startPos = [startrow, startcol] indica que un robot está inicialmente en la celda (startrow, startcol).

También se le da una cadena s de longitud m con índice 0, donde s[i] es la instrucción i-ésima para el robot:

- "L" (mover a la izquierda)
- "R" (mover a la derecha)
- "U" (mover hacia arriba)
- "D" (mover hacia abajo).

El robot puede empezar a ejecutarse a partir de cualquier instrucción ith de s. Ejecuta las instrucciones una a una hasta el final de s, pero se detiene si se cumple alguna de estas condiciones:

- La siguiente instrucción moverá al robot fuera de la cuadrícula.
- No quedan más instrucciones por ejecutar.

Devuelve una matriz respuesta de longitud m donde respuesta[i] es el número de instrucciones que puede ejecutar el robot si éste comienza a ejecutar desde la instrucción ith de s.

Ejemplo 1:
Input: n = 3, startPos = [0,1], s = "RRDDLU"
Output: [1,5,4,3,1,0]

- 0th: "(R)RDDLU" //1
- 1st: "(RDDLU)" //5
- 2nd: "(DDLU)" //4
- 3rd: "(DLU)" //3
- 4th: "(L)U" //1
- 5th: "U" //0

Ejemplo 2:
Input: n = 2, startPos = [1,1], s = "LURD"
Output: [4,1,0,0]

- 0th: "(LURD)" //4
- 1st: "(U)RD" //1
- 2nd: "RD" //0
- 3rd: "D" //0

Ejemplo 3:
Input: n = 1, startPos = [0,0], s = "LRUD"
Output: [0,0,0,0]

- 0th: "LURD" //0
- 1st: "URD" //0
- 2nd: "RD" //0
- 3rd: "D" //0
