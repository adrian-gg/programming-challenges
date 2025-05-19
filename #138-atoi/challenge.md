# Reto #137: Atoi

#### Dificultad: Media

## Enunciado

Implementa la función myAtoi(cadena s), que convierte una cadena en un entero con signo de 32 bits.

El algoritmo de myAtoi(cadena s) es el siguiente:

1. Espacios en blanco: Ignora cualquier espacio en blanco inicial (» »).

2. Significado: Determina el signo comprobando si el siguiente carácter es '-' o '+', asumiendo positividad si ninguno de los dos está presente.

3. Conversión: Leer el número entero saltándose los ceros a la izquierda hasta que se encuentre un carácter que no sea un dígito o se llegue al final de la cadena. Si no se lee ningún dígito, el resultado es 0.

4. Redondeo: Si el entero está fuera del rango de enteros con signo de 32 bits [-231, 231 - 1], entonces redondea el entero para que permanezca dentro del rango. Específicamente, los enteros menores que -231 deben redondearse a -231, y los enteros mayores que 231 - 1 deben redondearse a 231 - 1.

Devuelve el entero como resultado final.

Ejemplo 1:
Input: s = "42"
Output: 42
The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
^
Step 3: "42" ("42" is read in)
^

Ejemplo 2:
Input: s = " -042"
Output: -42
Step 1: " -042" (leading whitespace is read and ignored)
^
Step 2: " -042" ('-' is read, so the result should be negative)
^
Step 3: " -042" ("042" is read in, leading zeros ignored in the result)
^

Ejemplo 3:
Input: s = "1337c0d3"
Output: 1337
Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
^

Ejemplo 4:
Input: s = "0-1"
Output: 0
Step 1: "0-1" (no characters read because there is no leading whitespace)
^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
^

Ejemplo 5:
Input: s = "words and 987"
Output: 0
Reading stops at the first non-digit character 'w'.
