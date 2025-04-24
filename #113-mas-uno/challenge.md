# Reto #113: Más uno

#### Dificultad: Facil

## Enunciado

Se le da un número entero grande representado como una matriz entera digits, donde cada digits[i] es el ith dígito del número entero. Los dígitos están ordenados de mayor a menor importancia de izquierda a derecha. El entero grande no contiene ningún 0 a la izquierda.

Incrementa el entero grande en uno y devuelve la matriz de dígitos resultante.

Ejemplo 1:

Input: dígitos = [1,2,3]
Output: [1,2,4]
El array representa el entero 123.
Incrementando en uno se obtiene 123 + 1 = 124.
Por lo tanto, el resultado debería ser [1,2,4].

Ejemplo 2:

Input: dígitos = [4,3,2,1]
Output: [4,3,2,2]
El array representa el entero 4321.
Incrementando en uno da 4321 + 1 = 4322.
Por lo tanto, el resultado debería ser [4,3,2,2].

Ejemplo 3:

Input: dígitos = [9]
Output: [1,0]
La matriz representa el entero 9.
Incrementando en uno se obtiene 9 + 1 = 10.
Por lo tanto, el resultado debería ser [1,0].
