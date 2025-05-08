# Reto #128: Compraventa de acciones

#### Dificultad: Facil

## Enunciado

Se le da una matriz precios donde precios[i] es el precio de una acción dada en el día ith.

Usted quiere maximizar su beneficio eligiendo un día para comprar una acción y eligiendo otro día en el futuro para vender esa acción.

Devuelva el máximo beneficio que puede obtener de esta operación. Si no puede obtener ningún beneficio, devuelva 0.

Ejemplo 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Compre el día 2 (precio = 1) y venda el día 5 (precio = 6), beneficio = 6-1 = 5.
Ten en cuenta que comprar el día 2 y vender el día 1 no está permitido porque debes comprar antes de vender.

Ejemplo 2:

Input: prices = [7,6,4,3,1]
Output: 0
En este caso, no se realiza ninguna transacción y el beneficio máximo = 0.
