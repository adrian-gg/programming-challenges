/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Dificultad: MEDIA
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

function chineseZodiac(year) {
  const elements = ["madera", "fuego", "tierra", "metal", "agua"]
  const animals = [
    "rata",
    "buey",
    "tigre",
    "conejo",
    "dragón",
    "serpiente",
    "caballo",
    "oveja",
    "mono",
    "gallo",
    "perro",
    "cerdo",
  ]

  if (typeof year !== "number") return "Parámetro no válido."
  if (year < 604) return "El ciclo sexagenario comenzó en el año 604."

  const sexagenaryYear = (year - 4) % 60
  const element = elements[Math.floor((sexagenaryYear % 10) / 2)]
  const animal = animals[sexagenaryYear % 12]

  return `${animal} ${element}`
}

console.log(chineseZodiac(1924)) // rata madera
console.log(chineseZodiac(1946)) // perro fuego
console.log(chineseZodiac(1984)) // rata madera
console.log(chineseZodiac(604)) // rata madera
console.log(chineseZodiac(603)) // El ciclo sexagenario comenzó en el año 604.
console.log(chineseZodiac(1987)) // conejo fuego
console.log(chineseZodiac(2025)) // serpiente madera
