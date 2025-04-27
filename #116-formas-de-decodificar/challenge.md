# Reto #116: Formas de decodificar

#### Dificultad: Media

## Enunciado

Has interceptado un mensaje secreto codificado como una cadena de números. El mensaje se descodifica mediante el siguiente mapeo:

"1" -> 'A'
"2" -> 'B'
...
"25" -> 'Y'
"26" -> 'Z'

Sin embargo, mientras descodifica el mensaje, se da cuenta de que hay muchas formas distintas de descodificarlo porque algunos códigos están contenidos en otros códigos ("2" y "5" frente a "25").

Por ejemplo, "11106" puede descodificarse en:

- "AAJF" con la agrupación (1, 1, 10, 6)
- "KJF" con la agrupación (11, 10, 6)
- La agrupación (1, 11, 06) no es válida porque "06" no es un código válido (sólo "6" es válido).
  Nota: puede haber cadenas imposibles de descodificar.

Dada una cadena s que sólo contiene dígitos, devuelve el número de formas de descodificarla. Si no se puede descodificar la cadena completa de ninguna forma válida, devuelve 0.

Los casos de prueba se generan de forma que la respuesta quepa en un entero de 32 bits.

Ejemplo 1:

- Input: s = "12"
- Output: 2
  "12" podría descodificarse como "AB" (1 2) o "L" (12).

Ejemplo 2:

- Input: s = "226"
- Output: 3
  "226" podría descodificarse como "BZ" (2 26), "VF" (22 6) o "BBF" (2 2 6).

Ejemplo 3:

- Input: s = "06"
- Output: 0
  "06" no puede asignarse a "F" debido al cero inicial ("6" es diferente de "06"). En este caso, la cadena no es una codificación válida, por lo que devuelve 0.
