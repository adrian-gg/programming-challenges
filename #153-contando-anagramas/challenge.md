# Reto #153: Contando anagramas

#### Dificultad: hard

## Enunciado

Se le da una cadena s que contiene una o más palabras. Cada par consecutivo de palabras está separado por un espacio ' '.

Una cadena t es un anagrama de la cadena s si la i-ésima palabra de t es una permutación de la i-ésima palabra de s.

Por ejemplo, "acb dfe" es un anagrama de "abc def", pero "def cab" y "adc bef" no lo son.
Devuelva el número de anagramas distintos de s.

Ejemplo 1
Input: s = "too hot"
Output: 18
Algunos de los anagramas de la cadena dada son "too hot", "oot hot", "oto toh", "too toh" y "too oht".

Ejemplo 2:
Input: s = "aa"
Output: 1
Sólo hay un anagrama posible para la cadena dada.
