# Reto #157: Random 3

#### Dificultad: easy

## Enunciado

Ya sabes como crear una función para obtener un número aleatorio. Ahora tendrás que implementar una función que devuelva de forma aleatoria un elemento de una lista. La función aceptará dos parámetros: la lista y la lista de probabilidades de cada elemento.

Ejemplo 1:
Input: getRandomSample(["cat", "dog", "fox"])
Output: "cat" (33.33%), "dog" (33.33%), "fox" (33.33%)

Ejemplo 2:
Input: getRandomSample(["cat", "dog", "fox"], [1, 1, 10])
Output: "cat" (8.33%), "dog" (8.33%), "fox" (83.33%)

Ejemplo 3:
Input: getRandomSample(["cat", "dog", "fox"], [1, 1, 0])
Output: "cat" (50%), "dog" (50%), "fox" (0%)
