# Reto #177: Fusionar por suma de valores

#### Dificultad: easy

## Enunciado

Se dan dos matrices de enteros 2D nums1 y nums2.

- nums1[i] = [idi, vali] indican que el número con el id idi tiene un valor igual a vali.
- nums2[i] = [idi, vali] indican que el número con el id idi tiene un valor igual a vali.

Cada matriz contiene ids únicos y está ordenada ascendentemente por id.

Fusiona las dos matrices en una sola que esté ordenada ascendentemente por id, respetando las siguientes condiciones:

- En la matriz resultante sólo deben incluirse los identificadores que aparezcan en al menos una de las dos matrices.
- Cada id debe incluirse una sola vez y su valor debe ser la suma de los valores de este id en las dos matrices. Si el id no existe en una de las dos matrices, se asumirá que su valor en esa matriz es 0.

Devuelve la matriz resultante. El array devuelto debe estar ordenado ascendentemente por id.

Ejemplo 1:
Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]

Ejemplo 2:
Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
