# Reto #100: Números romanos

#### Dificultad: Fácil

## Enunciado

Crea un programa que, dado un número decimal, lo transforme en su equivalente en número romano.

Los números romanos están formados a partir de letras: X, L, I, C, D… Cada letra tiene un valor numérico:

| ROMANO | DECIMAL |
| ------ | ------- |
| I      | 1       |
| V      | 5       |
| X      | 10      |
| L      | 50      |
| C      | 100     |
| D      | 500     |
| M      | 1000    |

Para representar números romanos hay que seguir algunas normas:

- Los símbolos se escriben y leen de izquierda a derecha, de mayor a menor valor.

  | ROMANO | DECIMAL         |
  | ------ | --------------- |
  | XVI    | 10 + 5 + 1 = 16 |

- Cuando se coloca un símbolo de valor menor a la izquierda de otro, se resta.

  | ROMANO | DECIMAL          |
  | ------ | ---------------- |
  | IV     | 5 - 1 = 4        |
  | IX     | 10 - 1 = 9       |
  | XLV    | 50 - 10 + 5 = 45 |

- Los símbolos 5 y sus múltiplos (V, L, D) siempre suman y no pueden estar a la izquierda de uno de mayor valor.

  | ROMANO ❌ | ROMANO ✅ | DECIMAL |
  | --------- | --------- | ------- |
  | VC        | XCV       | 95      |

- Se permiten como mucho tres repeticiones consecutivas del mismo símbolo.

  | ROMANO ❌ | ROMANO ✅ | DECIMAL |
  | --------- | --------- | ------- |
  | IIII      | IV        | 4       |
  | LXXX      | XC        | 90      |

- Un símbolo que aparece restando solo se puede repetir cuando su repetición esté colocada a más de un símbolo de distancia a su derecha.

  | ROMANO ❌ | ROMANO ✅ | DECIMAL |
  | --------- | --------- | ------- |
  | XXL       | XXX       | 30      |

- Solo se puede restar un símbolo de tipo 1 (I, X, C, M) sobre el inmediato mayor de tipo 1 o de tipo 5 (V, L, D).
- El símbolo I solo puede restar a V y a X. X solo puede restar a L y a C. El símbolo C solo puede restar a D y a M.
