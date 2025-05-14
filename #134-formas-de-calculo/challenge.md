# Reto #134: Formas de calculo

#### Dificultad: Dificil

## Enunciado

Dada una expresión de cadena de números y operadores, devuelva todos los resultados posibles de calcular todas las formas posibles de agrupar números y operadores. Puede devolver la respuesta en cualquier orden.

Los casos de prueba se generan de forma que los valores de salida quepan en un entero de 32 bits y el número de resultados diferentes no exceda de 104.

Ejemplo 1:

Input: expression = "2-1-1"
Output: [0,2]
((2-1)-1) = 0
(2-(1-1)) = 2

Ejemplo 2:
Input: expression = "2*3-4*5"
Output: [-34,-14,-10,-10,10]
(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
