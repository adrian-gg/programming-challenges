# Reto #176: Spam

#### Dificultad: medium

## Enunciado

Se le da un array de cadenas message y un array de cadenas bannedWords.

Un array de palabras se considera spam si hay al menos dos palabras en él que coincidan exactamente con cualquier palabra de bannedWords.

Devuelve true si el array mensaje es spam, y false en caso contrario.

Ejemplo 1:
Input: message = ["hello","world","leetcode"], bannedWords = ["world","hello"]
Output: true

Ejemplo 2:
Input: message = ["hello","programming","fun"], bannedWords = ["world","programming","leetcode"]
Output: false
