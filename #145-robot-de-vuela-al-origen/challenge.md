# Reto #145: Robot de vuela al origen

#### Dificultad: easy

## Enunciado

Hay un robot que parte de la posición (0, 0), el origen, en un plano 2D. Dada una secuencia de sus movimientos, juzga si este robot termina en (0, 0) después de completar sus movimientos.

Se te da una cadena moves que representa la secuencia de movimientos del robot donde moves[i] representa su i-ésimo movimiento. Los movimientos válidos son 'R' (derecha), 'L' (izquierda), 'U' (arriba) y 'D' (abajo).

Devuelve true si el robot vuelve al origen después de terminar todos sus movimientos, o false en caso contrario.

Nota: La forma en que el robot está «orientado» es irrelevante. 'R' siempre hará que el robot se mueva a la derecha una vez, 'L' siempre hará que se mueva a la izquierda, etc. Asume también que la magnitud del movimiento del robot es la misma para cada movimiento.

Ejemplo 1
Input: movimientos = "UD"
Output: true
El robot se mueve una vez hacia arriba y otra hacia abajo. Todos los movimientos tienen la misma magnitud, por lo que termina en el origen donde empezó. Por lo tanto, devolvemos true.

Ejemplo 2:
Input: movimientos = "LL"
Output: false
El robot se mueve dos veces a la izquierda. Termina dos «movimientos» a la izquierda del origen. Devolvemos false porque no está en el origen al final de sus movimientos.
