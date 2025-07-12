# Reto #192: Composición de funciones

#### Dificultad: easy

## Enunciado

Crea una función llamada compose que tome un array functions y devuelva una nueva función. La función devuelta debe aplicar cada función del array al resultado de la función anterior, pero en orden de derecha a izquierda.

Ejemplo:
Input: functions = [(x) => x + 1, (x) => x * x, (x) => x * 2], param = 1
Output: 5
