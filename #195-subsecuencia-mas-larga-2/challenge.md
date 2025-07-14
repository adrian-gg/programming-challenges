# Reto #195: Subsecuencia más larga 2

#### Dificultad: medium

## Enunciado

Se da una matriz de cadenas palabras, y una matriz grupos, ambas matrices de longitud n.

La distancia hamming entre dos cadenas de igual longitud es el número de posiciones en las que los caracteres correspondientes son diferentes.

Hay que seleccionar la subsecuencia más larga de una matriz de índices [0, 1, ..., n - 1], tal que para la subsecuencia denotada como [i0, i1, ..., ik-1] de longitud k, se cumpla lo siguiente:

Para índices adyacentes en la subsecuencia, sus grupos correspondientes son desiguales, es decir, grupos[ij] != grupos[ij+1], para cada j donde 0 < j + 1 < k.
palabras[ij] y palabras[ij+1] son iguales en longitud, y la distancia hamming entre ellos es 1, donde 0 < j + 1 < k, para todos los índices en la subsecuencia.
Devuelve una matriz de cadenas que contiene las palabras correspondientes a los índices (en orden) de la subsecuencia seleccionada. Si hay varias respuestas, devuelve cualquiera de ellas.

Nota: las cadenas de palabras pueden tener longitudes desiguales.

Example 1:
Input: words = ["bab","dab","cab"], groups = [1,2,2]
Output: ["bab","dab"]

Example 2:
Input: words = ["a","b","c","d"], groups = [1,2,3,4]
Output: ["a","b","c","d"]
