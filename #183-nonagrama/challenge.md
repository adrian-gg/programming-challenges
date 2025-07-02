# Reto #183: Nonagrama

#### Dificultad: easy

## Enunciado

Crea una función que genere un Nonagrama aleatório. Un Nonagrama es un puzle que consiste en una cuadrícula donde el objetivo es revelar una imagen oculta rellenando celdas basándose en números proporcionados en los márgenes de las filas y columnas.

No es necesario devolver la cuadrícula, solo los números de los márgenes de las filas y columnas.

Ejemplo 1:
Input w=4, h=3
Output: [ [[1],[3],[4]], [[2],[2],[3],[1]] ]

```
  2 2 3 1
1 · · x ·
3 x x x ·
4 x x x x
```

Ejemplo 2:
Input w=5, h=5
Output: [ [[2], [1], [1,1,1],[2],[0]], [[3],[1,1],[2],[0],[1]] ]

```
        1
      3 1 2 0 1
    2 x x · · ·
    1 x · · · ·
1 1 1 x · x · x
    2 · x x · ·
    0 · · · · ·
```
