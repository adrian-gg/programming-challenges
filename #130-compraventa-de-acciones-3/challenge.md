# Reto #130: Compraventa de acciones 3

#### Dificultad: Dificil

## Enunciado

Se le da una matriz precios donde precios[i] es el precio de una acción dada en el día i-ésimo.

Encuentre el beneficio máximo que puede obtener. Puede realizar un máximo de dos transacciones.

Nota: No puede realizar varias transacciones simultáneamente (es decir, debe vender la acción antes de volver a comprar).

Ejemplo 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Compra el día 4 (precio = 0) y vende el día 6 (precio = 3), beneficio = 3-0 = 3.
A continuación, compre el día 7 (precio = 1) y venda el día 8 (precio = 4), beneficio = 4-1 = 3.

Ejemplo 2:

Input: prices = [1,2,3,4,5]
Output: 4
Comprar el día 1 (precio = 1) y vender el día 5 (precio = 5), beneficio = 5-1 = 4.
Tenga en cuenta que no puede comprar el día 1, comprar el día 2 y venderlos más tarde, ya que está realizando varias transacciones al mismo tiempo. Debe vender antes de volver a comprar.

Ejemplo 3:

Input: prices = [7,6,4,3,1]
Output: 0
En este caso, no se realiza ninguna transacción, es decir, beneficio máximo = 0.
