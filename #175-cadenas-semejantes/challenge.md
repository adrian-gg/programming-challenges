# Reto #175: Cadenas semejantes

#### Dificultad: medium

## Enunciado

Se le da una matriz de cadenas words (con índice 0).

En una operación, elija dos índices distintos i y j, donde words[i] es una cadena no vacía, y mueva cualquier carácter de words[i] a cualquier posición en words[j].

Devuelve verdadero si puede igualar todas las cadenas de words mediante cualquier número de operaciones, y falso en caso contrario.

Ejemplo 1:
Input: words = ["abc", "aabc", "bc"]
Output: true
Mueve la primera 'a' en words[1] al frente de words[2],
para hacer words[1] = "abc" y words[2] = "abc".
Ahora todas las cadenas son iguales a "abc", por lo que devuelve verdadero.

Ejemplo 2:
Input: words = ["ab", "a"]
Output: falso
Es imposible hacer todas las cadenas iguales usando la operación.
