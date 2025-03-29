// Punto 1: Hola, mundo!
console.log("Hola, mundo!")

// Punto 2: Crea una variable de texto o string
let text = "Variable de texto o string."

// Punto 3: Crea una variable de número entero
let integer = 42

// Punto 4: Crea una variable de número con decimales
let decimal = 3.14

// Punto 5: Crea una variable de tipo booleano
let boolean = true

// Punto 6: Crea una constante
const CONSTANT = 10

// Punto 7: Usa un if, else if y else
if (integer > 50) {
  console.log("El número es mayor que 50.")
} else if (integer < 50) {
  console.log("El número es menor que 50.")
} else {
  console.log("El número es igual a 50.")
}

// Punto 8: Crea un Array
let array = [1, 2, 3, 4, 5]

// Punto 9: Crea una lista (Array en JavaScript)
let list = ["Manzana", "Banana", "Naranja"]

// Punto 10: Crea una tupla (no aplicable en JavaScript)

// Punto 11: Crea un set
let set = new Set(["Rojo", "Verde", "Azul"])

// Punto 12: Crea un diccionario (objeto en JavaScript)
let object = {
  key1: "valor1",
  key2: "valor2",
}

// Punto 13.1: Usa un ciclo for
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// Punto 13.2: Usa un ciclo forin
for (let key in list) {
  console.log(key)
}

// Punto 13.3: Usa un ciclo forof
for (let element of list) {
  console.log(element)
}

// Punto 14: Usa un ciclo foreach
list.forEach((element) => {
  console.log(element)
})

// Punto 15.1: Usa un ciclo while
let counter = 0
while (counter < 3) {
  console.log("Contador: " + counter)
  counter++
}

// Punto 15.2: Usa un ciclo dowhile
counter = 0
do {
  console.log("Contador: " + counter)
  counter++
} while (condition)

// Punto 16.1: Crea una función sin parámetros que no retorne nada
function functionWithoutParameters() {
  console.log("Función sin parámetros.")
}

// Punto 16.2: Crea una función flecha sin parámetros que no retorne nada
const arrowFunctionWithoutParameters = () => {
  console.log("Función flecha sin parámetros.")
}

// Punto 17.1: Crea una función con parámetros que no retorne nada
function functionWithParameters(param1, param2) {
  console.log("Parámetro 1: " + param1)
  console.log("Parámetro 2: " + param2)
}

// Punto 17.2: Crea una función flecha con parámetros que no retorne nada
const arrowFunctionWithParameters = (param1, param2) => {
  console.log("Parámetro 1: " + param1)
  console.log("Parámetro 2: " + param2)
}

// Punto 18.1: Crea una función con parámetros que retorne valor
function functionWithReturn(a, b) {
  return a + b
}

// Punto 18.2: Crea una función flecha con parámetros que retorne valor
const arrowFunctionWithReturn = (a, b) => a + b

// Punto 19: Crea una clase (sintaxis de clase en JavaScript)
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// Punto 20: Muestra control de excepciones
try {
  let result = integer / 0
  console.log(result)
} catch (error) {
  console.log("Error: " + error.message)
}
