# Reto #109: Travesía del caracol

#### Dificultad: Media

## Enunciado

Escriba código que mejore todos los arrays de forma que pueda llamar al método `snail(rowsCount, colsCount)` que transforma el array 1D en un array 2D organizado según el patrón conocido como orden de recorrido del caracol. Los valores de entrada no válidos deben dar como resultado un array vacío. Si `rowsCount * colsCount !== nums.length`, la entrada se considera inválida.

El orden de desplazamiento de caracol comienza en la celda superior izquierda con el primer valor de la matriz actual. A continuación, se desplaza por toda la primera columna de arriba a abajo, seguida de la siguiente columna a la derecha y la recorre de abajo a arriba. Este patrón continúa, alternando la dirección de recorrido con cada columna, hasta que se cubre toda la matriz actual. Por ejemplo, cuando se da la matriz de entrada `[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]` con `rowsCount = 5` y `colsCount = 4`, la matriz de salida deseada se muestra a continuación. Observe que la iteración de la matriz siguiendo las flechas corresponde al orden de los números en la matriz original.

Ejemplo 1:

```
Input:
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
rowsCount = 5
colsCount = 4

Output:
[
 [19, 17, 16, 15],
 [10, 1, 14, 4],
 [3, 2, 12, 20],
 [7, 5, 18, 11],
 [9, 8, 6, 13]
]
```

Ejemplo 2:

```
Input:
nums = [1,2,3,4]
rowsCount = 1
colsCount = 4

Output: [[1, 2, 3, 4]]
```

Ejemplo 3:

```
Input:
nums = [1, 3]
rowsCount = 2
colsCount = 2

Output: []
  2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.
```
