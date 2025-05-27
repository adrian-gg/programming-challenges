# Reto #147: Pares de palíndromos

#### Dificultad: hard

## Enunciado

Se le da una matriz con índice 0 de palabras de cadenas únicas.

Un par palíndromo es un par de enteros (i, j) tales que:

- 0 <= i, j < palabras.longitud,
- i != j, y
- palabras[i] + palabras[j] (la concatenación de las dos cadenas) es un palíndromo.

Devuelve un array con todos los pares de palabras palíndromas.

Debe escribir un algoritmo con complejidad de tiempo de ejecución O(suma de palabras[i].longitud).

Ejemplo 1:

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Los palindromos son ["abcddcba","dcbaabcd","slls","llssssll"]

Ejemplo 2:

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Los palindromos son ["battab","tabbat"]

Ejemplo 3:

Input: words = ["a",""]
Output: [[0,1],[1,0]]
Los palindromos son ["a","a"]
