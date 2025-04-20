# Reto #110: Agrupamiento

#### Dificultad: Media

## Enunciado

Escriba código que mejore todos los arrays de forma que pueda llamar al método `groupOf(groupSize)` que transforma el array 1D en un array 2D agrupando. Los valores de entrada no válidos deben dar como resultado un array vacío. Si `nums.length % groupSize !== 0`, la entrada se considera inválida.

Ejemplo 1:

```
Input:
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
groupSize = 5

Output:
[
 [19, 10, 3, 7, 9],
 [8, 5, 2, 1, 17],
 [16, 14, 12, 18, 6],
 [13, 11, 20, 4, 15]
]
```

Ejemplo 2:

```
Input:
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
groupSize = 1

Output:
[
  [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
]
```

Ejemplo 3:

```
Input:
nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
groupSize = 3

Output: []
```
