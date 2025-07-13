# Reto #1932: Mi jardin

#### Dificultad: medium

## Enunciado

Tienes n jardines, etiquetados de 1 a n, y una matriz paths donde paths[i] = [xi, yi] describe un camino bidireccional entre el jardín xi y el jardín yi. En cada jardín, quieres plantar uno de 4 tipos de flores.

Todos los jardines tienen como máximo 3 paths que entran o salen de él.

Tu tarea es elegir un tipo de flor para cada jardín de forma que, para dos jardines cualesquiera conectados por un camino, tengan diferentes tipos de flores.

Devuelve cualquiera de estas elecciones como una matriz respuesta, donde respuesta[i] es el tipo de flor plantada en el (i+1)º jardín. Los tipos de flor se denotan 'A','B','C' o 'D'. Se garantiza que existe una respuesta.

Ejemplo 1:
Input: n = 3, paths = [[1,2],[2,3],[3,1]]
Output: ['A','B','C']
Los jardines 1 y 2 tienen diferentes tipos de flores.
Los jardines 2 y 3 tienen diferentes tipos de flores.
Los jardines 3 y 1 tienen diferentes tipos de flores.
Así pues, ['A','B','C'] es una respuesta válida. Otras respuestas posibles pueden ser ['A','B','D'], ['A','D','B'], and ['C','B','A'].

Ejemplo 2:
Input: n = 4, paths = [[1,2],[3,4]]
Output: ['A','B','A','B']

Ejemplo 3:
Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: ['A','B','C','D']
