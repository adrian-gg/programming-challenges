/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Dificultad: FÁCIL
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function getArea(poligon) {
  const POLIGONS = ["triangle", "square", "rectangle"]
  const { type, w, h = w } = poligon
  if (
    !POLIGONS.includes(type) ||
    typeof w !== "number" ||
    typeof h !== "number"
  )
    return "Parámetro no valido"

  if (type === "triangle") {
    return (w * h) / 2
  } else if (
    (type === "square" && w === h) ||
    (type === "rectangle" && w !== h)
  ) {
    return w * h
  }

  return "Parámetro no valido"
}

console.log(getArea("triangle", 6, 9)) //Parámetro no valido
console.log(getArea(["square", 6, 9])) //Parámetro no valido
console.log(getArea({ type: "hexagon", w: 3, h: 5 })) //Parámetro no valido

console.log(getArea({ type: "triangle", w: 6, h: 9 })) //27
console.log(getArea({ type: "square", w: 4 })) //16
console.log(getArea({ type: "rectangle", w: 7, h: 3 })) //21

console.log(getArea({ type: "triangle", w: 6 })) //18
console.log(getArea({ type: "square", w: 4, h: 6 })) //Parámetro no valido
console.log(getArea({ type: "rectangle", w: 7 })) //Parámetro no valido
