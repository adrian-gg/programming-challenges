# Reto #173: Walking Robot Simulation

#### Dificultad: medium

## Enunciado

Un robot en un plano XY infinito comienza en el punto (0, 0) mirando hacia el norte. El robot recibe una matriz de órdenes enteras, que representa una secuencia de movimientos que debe ejecutar. Sólo hay tres tipos posibles de instrucciones que el robot puede recibir:

- -2: Gira a la izquierda 90 grados.
- -1: Gira a la derecha 90 grados.
- 1 <= k <= 9: Avanza k unidades, una unidad cada vez.

Algunos de los cuadrados de la cuadrícula son obstáculos. El i-ésimo obstáculo está en el punto de la cuadrícula obstacles[i] = (xi, yi). Si el robot se encuentra con un obstáculo, permanecerá en su ubicación actual (en el bloque adyacente al obstáculo) y pasará a la siguiente orden.

Devuelve la distancia euclídea al cuadrado máxima que alcanza el robot en cualquier punto de su trayectoria (es decir, si la distancia es 5, devuelve 25).

Notas:

- Puede haber un obstáculo en (0, 0). Si esto ocurre, el robot ignorará el obstáculo hasta que se haya movido del origen. Sin embargo, no podrá volver a (0, 0) debido al obstáculo.
- Norte significa dirección +Y.
- Este significa dirección +X.
- Sur significa dirección -Y.
- Oeste significa dirección -X.

Traducción realizada con la versión gratuita del traductor DeepL.com

Ejemplo 1:
Input: commands = [4,-1,3], obstacles = []
Output: 25

- El robot comienza en (0, 0)
- Muévete 4 unidades hacia el norte hasta (0, 4).
- Gira a la derecha.
- Se desplaza hacia el este 3 unidades hasta (3, 4).

El punto más alejado del origen al que llega el robot es (3, 4), que al cuadrado está a 32 + 42 = 25 unidades.

Ejemplo 2:
Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65

- El robot comienza en (0, 0):
- Muévete 4 unidades hacia el norte hasta (0, 4).
- Gira a la derecha.
- Mover al este 1 unidad y quedar bloqueado por el obstáculo en (2, 4), el robot está en (1, 4).
- Gira a la izquierda.
- Muévete 4 unidades al norte hasta (1, 8).

El punto más alejado del origen al que llega el robot es (1, 8), que al cuadrado está a 12 + 82 = 65 unidades.
