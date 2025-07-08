# Reto #189: Pixelart

#### Dificultad: medium

## Enunciado

Crea un generador de pixelart mediante una seed aleatoria.
Para que cuente como pixelart, ha de ser:

- su tamaño, de 5, 7, o 9 bloques.
- verticalmente simétrico a excepción de la línea del medio.
- de un único color, a elegir entre ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫", "⬜"]

La seed debe ser de 8 caracteres entre (AZ09)
Puedes servirte de ejercicios anteriores para generar la seed.

Ejemplo 1:
Input: "XYZKGSMQ"
Output:

```
SEED: XYZKGSMQ
🟧🟧🟧🟧🟧
⬛⬛⬛⬛⬛
🟧⬛🟧⬛🟧
⬛🟧⬛🟧⬛
🟧🟧⬛🟧🟧
```

Ejemplo 2:
Input: "NPGTRVFP"
Output:

```
SEED: NPGTRVFP
⬛⬜⬛⬛⬛⬜⬛
⬛⬜⬛⬛⬛⬜⬛
⬛⬛⬜⬛⬜⬛⬛
⬛⬜⬜⬛⬜⬜⬛
⬜⬜⬜⬛⬜⬜⬜
⬛⬜⬜⬜⬜⬜⬛
⬜⬛⬛⬜⬛⬛⬜
```
