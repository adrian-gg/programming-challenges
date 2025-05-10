# Reto #129: Compraventa de acciones 2

#### Dificultad: Media

## Enunciado

Se le da una matriz de enteros precios donde precios[i] es el precio de una acción dada en el día ith.

Cada día, puede decidir comprar y/o vender la acción. Sólo puede tener como máximo una acción en cada momento. Sin embargo, puede comprarla y venderla inmediatamente el mismo día.

Encuentre y devuelva el máximo beneficio que puede obtener.

Ejemplo 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Compra el día 2 (precio = 1) y vende el día 3 (precio = 5), beneficio = 5-1 = 4.
A continuación, compra el día 4 (precio = 3) y vende el día 5 (precio = 6), beneficio = 6-3 = 3.
El beneficio total es de 4 + 3 = 7.

Ejemplo 2:

Input: prices = [1,2,3,4,5]
Output: 4
Compra el día 1 (precio = 1) y vende el día 5 (precio = 5), beneficio = 5-1 = 4.
El beneficio total es 4.

Ejemplo 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explicación: No hay forma de obtener un beneficio positivo, por lo que nunca compramos las acciones para alcanzar el beneficio máximo de 0.
