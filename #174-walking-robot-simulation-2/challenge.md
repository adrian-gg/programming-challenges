# Reto #174: Walking Robot Simulation 2

#### Dificultad: medium

## Enunciado

Una cuadrícula de anchura x altura está en un plano XY con la celda inferior izquierda en (0, 0) y la celda superior derecha en (anchura - 1, altura - 1). La cuadrícula está alineada con los cuatro puntos cardinales ("Norte", "Este", "Sur" y "Oeste"). Un robot se encuentra inicialmente en la celda (0, 0) orientado en dirección "Este".

Se puede ordenar al robot que se mueva durante un número determinado de pasos. En cada paso hace lo siguiente

1. Intenta avanzar una celda en la dirección a la que está orientado.
2. Si la celda a la que se está moviendo el robot está fuera de los límites, el robot gira 90 grados en sentido contrario a las agujas del reloj y vuelve a intentar el paso.

Cuando el robot termina de moverse el número de pasos necesarios, se detiene y espera la siguiente instrucción.

Implementa la clase Robot:

- Robot(int width, int height) Inicializa la rejilla de anchura x altura con el robot en (0, 0) orientado hacia el "Este".
- function step(int num) Ordena al robot avanzar un número de pasos.
- int[] getPos() Devuelve la celda actual en la que se encuentra el robot, como una matriz de longitud 2, [x, y].
- String getDir() Devuelve la dirección actual del robot, "Norte", "Este", "Sur" u "Oeste".

Ejemplo 1:
Input: commands = ["Robot", "step", "step", "getPos", "getDir", "step", "step", "step", "getPos", "getDir"], params = [[6, 3], [2], [2], [], [], [2], [1], [4], [], []]
Output: [null, null, null, [4, 0], "East", null, null, null, [1, 2], "West"]

- Robot robot = new Robot(6, 3); // Inicializa la rejilla y el robot en (0, 0) mirando hacia el Este.
- robot.step(2); // Se mueve dos pasos hacia el Este hasta (2, 0), y mira hacia el Este.
- robot.step(2); // Se mueve dos pasos hacia el Este hasta (4, 0), y mira hacia el Este.
- robot.getPos(); // return [4, 0]
- robot.getDir(); // return "East"
- robot.step(2); // Se mueve un paso hacia el Este hasta (5, 0), y mira hacia el Este.
  // El siguiente paso hacia el Este estaría fuera de los límites, así que gira y mira hacia el Norte.
- robot.step(1); // Se mueve un paso hacia el Norte hasta (5, 2), y mira hacia el - Norte (no hacia el Oeste).
- robot.step(4); // El siguiente paso hacia el Norte estaría fuera de los límites, por lo que se gira y mira hacia el Oeste.
- robot.getPos(); // devuelve [1, 2]
- robot.getDir(); // devuelve "Oeste".
