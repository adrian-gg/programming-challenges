# Reto #191: Subsecuencia más larga

#### Dificultad: easy

## Enunciado

Se da una matriz de cadenas words y una matriz binaria groups, ambas de longitud n.

Una subsecuencia de words es alterna si para dos cadenas consecutivas cualesquiera de la secuencia, sus elementos correspondientes en los mismos índices de los groups son diferentes (es decir, no puede haber 0 ó 1 consecutivos).

Su tarea consiste en seleccionar la subsecuencia alterna más larga de las words.

Devuelva la subsecuencia seleccionada. Si hay varias respuestas, devuelva cualquiera de ellas.

Nota: Los elementos de las words son distintos.

Example 1:
Input: words = ["e","a","b"], groups = [0,0,1]
Output: ["e","b"]

Example 2:
Input: words = ["a","b","c","d"], groups = [1,0,1,1]
Output: ["a","b","c"]
