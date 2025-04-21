# Reto #111: Anulación de intérvalos

#### Dificultad: Media

## Enunciado

Dada una función `fn`, una matriz de argumentos `args` y un intervalo de tiempo `t`, devuelve una función cancel `cancelFn`.

Tras un retardo de `cancelTimeMs`, se invocará a la función cancel devuelta `cancelFn`.

```
setTimeout(cancelFn, cancelTimeMs)
```

La función `fn` debe invocarse con `args` inmediatamente y luego volver a invocarse cada `t` milisegundos hasta que se invoque a `cancelFn` en `cancelTimeMs` ms.

Ejemplo 1:

Input:

```
fn = (x) => x _ 2
args = [4]
t = 35
cancelTimeMs = 190
```

Output:

```
{"time": 0, "returned": 8},
{"time": 35, "returned": 8},
{"time": 70, "returned": 8},
{"time": 105, "returned": 8},
{"time": 140, "returned": 8},
{"time": 175, "returned": 8}
```

const cancelTimeMs = 190;
const cancelFn = cancelable((x) => x \_ 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);

Cada 35ms, se llama a fn(4). Hasta t=190ms, entonces se cancela.
1ª llamada fn a 0 ms. fn(4) devuelve 8.
2ª llamada fn a 35ms. fn(4) devuelve 8.
3ª llamada fn a 70ms. fn(4) devuelve 8.
4ª llamada fn a 105ms. fn(4) devuelve 8.
5ª llamada fn a 140 ms. fn(4) devuelve 8.
6ª llamada fn a 175ms. fn(4) devuelve 8.
Cancelada a 190ms

Ejemplo 2:

Input:

```
fn = (x1, x2) => (x1 \_ x2)
args = [2, 5]
t = 30
cancelTimeMs = 165
```

Output:

```
{"time": 0, "returned": 10},
{"time": 30, "returned": 10},
{"time": 60, "returned": 10},
{"time": 90, "returned": 10},
{"time": 120, "returned": 10},
{"time": 150, "returned": 10}
```

const cancelTimeMs = 165;
const cancelFn = cancelable((x1, x2) => (x1 \_ x2), [2, 5], 30)
setTimeout(cancelFn, cancelTimeMs)

Cada 30ms, se llama a fn(2, 5). Hasta t=165ms, entonces se cancela.
1ª llamada fn a 0ms. devuelve 10.
2ª llamada fn a 30ms. devuelve 10.
3ª llamada fn a 60ms. devuelve 10.
4ª llamada fn a 90ms. devuelve 10.
5ª llamada fn a 120ms. devuelve 10.
6ª llamada fn a 150ms. devuelve 10.
Cancelada a 165ms

Ejemplo 3:

Input:

```
fn = (x1, x2, x3) => (x1 + x2 + x3)
args = [5, 1, 3]
t = 50
cancelTimeMs = 180
```

Output:

```

{"time": 0, "returned": 9},
{"time": 50, "returned": 9},
{"time": 100, "returned": 9},
{"time": 150, "returned": 9}

```

const cancelTimeMs = 180;
const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
setTimeout(cancelFn, cancelTimeMs)

Cada 50ms, se llama a fn(5, 1, 3). Hasta t=180ms, entonces se cancela.
1ª llamada fn a 0ms. devuelve 9.
2ª llamada fn a 50ms. devuelve 9.
3ª llamada fn a 100ms. devuelve 9.
4ª llamada fn a 150ms. devuelve 9.
Cancelada a 180ms
