# Reto #159: Motor de plantilla

#### Dificultad: medium

## Enunciado

Crea tu propia versión simplificada de un motor de plantillas. Debería ser capaz de tomar una cadena de texto (tu "plantilla") que contenga marcadores especiales (por ejemplo, {{nombre}} o {% if condicion %}) y un objeto de datos. El motor debe procesar la plantilla, reemplazando los marcadores con los valores del objeto y ejecutando lógica básica (como condicionales o bucles simples) definida por tus marcadores.

Ejemplo:

Input:
template = "Hola, {{ name }}! Tienes {{ age }} años.",
data = { name: "Alice", age: 30 }

Output: "Hola, Alice! Tienes 30 años."
