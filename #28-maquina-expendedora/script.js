/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Dificultad: MEDIA
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos con monedas de 1, 2, 5, 10, 20, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

function buy(product, money) {
  const MONEY = {
    ONE: 1,
    TWO: 2,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    FIFTY: 50,
    ONEHUNDRED: 100,
    TWOHUNDRED: 200,
  }
  const PRODUCTS = [
    { name: "Agua", price: 50 },
    { name: "Coca-Cola", price: 100 },
    { name: "Cerveza", price: 155 },
    { name: "Pizza", price: 200 },
    { name: "Donut", price: 75 },
  ]

  if (product <= 0 || product > PRODUCTS.length)
    return { producto: "ERROR: Producto no encontrado.", change: money }
  if (money.some((m) => !MONEY[m]))
    return { producto: "ERROR: Dinero no válido.", change: money }
  let totalMoney =
    money.reduce((acc, val) => acc + MONEY[val], 0) -
    PRODUCTS[product - 1].price
  if (totalMoney < 0)
    return { producto: "ERROR: Dinero insuficiente.", change: money }

  let change = []
  Object.entries(MONEY)
    .reverse()
    .forEach(([key, value]) => {
      while (totalMoney > 0 && totalMoney >= value) {
        totalMoney -= value
        change.push(key)
      }
    })

  return { producto: PRODUCTS[product - 1].name, change }
}

console.log(buy(1, ["FIVE", "FIVE", "TEN", "TEN", "TEN", "FIVE"]))
//{ producto: 'ERROR: Dinero insuficiente.', change: [ 'FIVE', 'FIVE', 'TEN', 'TEN', 'TEN', 'FIVE' ] }
console.log(buy(3, ["FIVE", "FIVE", "TEN", "TEN", "TEN", "FIVE"]))
//{ producto: 'ERROR: Dinero insuficiente.', change: [ 'FIVE', 'FIVE', 'TEN', 'TEN', 'TEN', 'FIVE' ] }
console.log(buy(5, ["TIN"]))
//{ producto: 'ERROR: Dinero no válido.', change: [ 'TIN' ] }
console.log(buy(6, ["FIVE"]))
//{ producto: 'ERROR: Producto no encontrado.', change: [ 'FIVE' ] }
console.log(buy(1, ["FIVE", "FIVE", "TEN", "TEN", "TEN", "FIVE", "FIFTY"]))
//{ producto: 'Agua', change: [ 'TWENTY', 'TWENTY', 'FIVE' ] }
console.log(buy(5, ["TWOHUNDRED"]))
//{ producto: 'Donut', change: [ 'ONEHUNDRED', 'TWENTY', 'FIVE' ] }
console.log(buy(2, ["FIFTY", "TWENTY", "TWENTY", "TEN"]))
//{ producto: 'Coca-Cola', change: [] }
