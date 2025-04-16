# Reto #106: Comparador de versiones

#### Dificultad: Media

## Enunciado

Dadas dos cadenas de versión, versión1 y versión2, compáralas.
Una cadena de versiones consta de revisiones separadas por puntos “.”. El valor de la revisión es su conversión entera ignorando los ceros a la izquierda.

Para comparar cadenas de versiones, compara sus valores de revisión en orden de izquierda a derecha. Si una de las cadenas de versiones tiene menos revisiones, trate los valores de revisión que faltan como 0.

Devuelve lo siguiente:

- Si versión1 < versión2, devuelve -1.
- Si versión1 > versión2, devuelve 1.
- En caso contrario, devuelve 0.

Ejemplo 1:

- Input: version1 = "1.2", version2 = "1.10"
- Output: -1

La segunda revisión de la versión1 es "2" y la segunda revisión de la versión2 es "10": 2 < 10, así que versión1 < versión2.

Ejemplo 2:

- Input: version1 = "1.01", version2 = "1.001"
- Output: 0

Ignorando los ceros a la izquierda, tanto "01" como "001" representan el mismo número entero "1".

Ejemplo 3:

- Input: version1 = "1.0", version2 = "1.0.0.0"
- Output: 0

La versión1 tiene menos revisiones, lo que significa que todas las revisiones que faltan se tratan como "0".
