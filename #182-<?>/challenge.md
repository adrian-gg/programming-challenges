# Reto #182: <?>

#### Dificultad: medium

## Enunciado

Dada una serie de caracteres (letras mayúsculas y números), queremos representarlos como matrices binarias de 5x3 (donde 1 representa un "píxel" encendido y 0 un "píxel" apagado). Además, necesitamos una forma de "codificar" y "decodificar" mensajes utilizando estas representaciones pixeladas y una clave secreta.

1. Creen un objeto (CHARS) que contenga todas las letras mayúsculas (A-Z) y los números (0-9) como claves. El valor para cada clave debe ser una matriz de 5x3 que represente visualmente ese carácter. Por ejemplo, para la letra 'A':

A: [
[0, 1, 0],
[1, 0, 1],
[1, 1, 1],
[1, 0, 1],
[1, 0, 1],
]

2. Desarrolla una función (enigmaCoder) que acepte tres parámetros:

- text: El mensaje de texto a codificar/decodificar.
- key: Una cadena de texto que actúa como la clave secreta.
- decode: Un booleano (true para decodificar, false para codificar).

Esta función debe comportarse de la siguiente manera:

- Modo Codificación (decode = false):

  - Toma cada carácter del text y busca su representación en el objeto CHARS.
  - Para cada "píxel" (1 o 0) en la matriz del carácter:

    - Si el "píxel" es 1, reemplázalo con un carácter aleatorio presentes en la key.
    - Si el "píxel" es 0, reemplázalo con un carácter aleatorio NO presentes en la key.

  - Entre la representación de cada carácter debe haber un espacio de un ancho. Este también se transformará en un carácter aleatorio NO presente en key.
  - La salida final debe ser una cadena de múltiples líneas, donde cada línea representa una fila de los caracteres pixelados combinados.

- Modo Decodificación (decode = true):
  Sustituye todas las letras del text que estén en la key por (🟩), o si no lo están, (⬛).

Ejemplo 1:
Input: text="A", key = "CODE", decode=false
Output:
`A E 1
E Y E
D E E
D A D
D 1 O`

Ejemplo 2:
Input: text=
`A E 1
E Y E
D E E
D A D
D 1 O`
, key = "CODE", decode=true
Output:
⬛🟩⬛
🟩⬛🟩
🟩🟩🟩
🟩⬛🟩
🟩⬛🟩
