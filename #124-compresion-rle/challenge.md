# Reto #124: Compresión RLE

#### Dificultad: Media

## Enunciado

La codificación run-length (RLE) es un método de compresión de cadenas que funciona sustituyendo caracteres idénticos consecutivos (repetidos 2 o más veces) por la concatenación del carácter y el número que marca el recuento de los caracteres (longitud del run). Por ejemplo, para comprimir la cadena "3322251" sustituimos "33" por "23", sustituimos "222" por "32", sustituimos "5" por "15" y sustituimos "1" por "11". Así, la cadena comprimida se convierte en "23321511".

Dado un número entero positivo n, devuelve el enésimo elemento de la secuencia contar-y-decir.

Ejemplo 1:

Input: n = 4
Output: "1211"
countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"

Ejemplo 2:

Input: n = 1
Output: "1"
This is the base case.
