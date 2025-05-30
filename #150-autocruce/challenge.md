# Reto #145: Autocruce

#### Dificultad: hard

## Enunciado

Se le da una matriz de enteros distance.

Empiezas en el punto (0, 0) en un plano X-Y, y mueves la distance[0] metros hacia el norte, luego la distance[1] metros hacia el oeste, la distance[2] metros hacia el sur, la distance[3] metros hacia el este, y así sucesivamente. En otras palabras, después de cada movimiento, tu dirección cambia en sentido contrario a las agujas del reloj.

Devuelve verdadero si tu camino se cruza a sí mismo o falso si no lo hace.

Ejemplo 1:
![Keypad](https://assets.leetcode.com/uploads/2022/12/21/11.jpg)
Input: distance = [2,1,1,2]
Output: true
El camino se cruza en el punto (0, 1).

Ejemplo 2:
![Keypad](https://assets.leetcode.com/uploads/2022/12/21/22.jpg)
Input: distance = [1,2,3,4]
Output: false
El camino no se cruza en ningun punto.

Ejemplo 3:
![Keypad](https://assets.leetcode.com/uploads/2022/12/21/33.jpg)
Input: distance = [1,1,1,2,1]
Output: true
El camino se cruza en el punto (0, 0).
