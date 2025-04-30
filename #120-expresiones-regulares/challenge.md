# Reto #120: Expresiones regulares

#### Dificultad: Hard

## Enunciado

Dada una cadena de entrada s y un patrón p, implemente la correspondencia de expresiones regulares con soporte para “.” y “\*” donde:

'.' Coincide con cualquier carácter.
'\*' Coincide con cero o más del elemento precedente.
La coincidencia debe abarcar toda la cadena de entrada (no parcial).

Ejemplo 1:

Input: s = "aa", p = "a"
Output: false
"a" does not match the entire string "aa".

Ejemplo 2:

Input: s = "aa", p = "a*"
Output: true
'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Ejemplo 3:

Input: s = "ab", p = "._"
Output: true
"._" means "zero or more (\*) of any character (.)".
