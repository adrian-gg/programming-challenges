/*
 * Reto #36
 * LOS ANILLOS DE PODER
 * Dificultad: MEDIA
 * Enunciado: ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron
 * contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo de la
 *   suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco, 2 Pelosos empatan contra 1 Orco, 3 Pelosos ganan a 1 Orco.
 */

const kindArmies = {
  HARFOOT: 1,
  SOUTHERNER: 2,
  DWARF: 3,
  NUMENOREAN: 4,
  ELF: 5,
}

const evilArmies = {
  SOUTHERNER: 2,
  ORC: 2,
  GOBLIN: 2,
  WARG: 3,
  TROLL: 5,
}

function battleForTheMiddleEarth(kindArmy, evilArmy) {
  const good = kindArmy.reduce(
    (acc, val) => acc + kindArmies[val[0]] * val[1],
    0
  )
  const evil = evilArmy.reduce(
    (acc, val) => acc + evilArmies[val[0]] * val[1],
    0
  )

  if (good === evil) console.log("Empate.")
  else if (good > evil) console.log("Gana el bien.")
  else console.log("Gana el mal.")
}

battleForTheMiddleEarth([["ELF", 1]], [["TROLL", 1]]) // Empate.

battleForTheMiddleEarth(
  [
    ["ELF", 1],
    ["HARFOOT", 1],
  ],
  [["TROLL", 1]]
) // Gana el bien.

battleForTheMiddleEarth(
  [
    ["ELF", 1],
    ["HARFOOT", 1],
  ],
  [
    ["TROLL", 1],
    ["ORC", 1],
  ]
) // Gana el mal.

battleForTheMiddleEarth(
  [
    ["ELF", 56],
    ["HARFOOT", 80],
    ["DWARF", 5],
  ],
  [
    ["TROLL", 17],
    ["ORC", 51],
    ["WARG", 10],
    ["SOUTHERNER", 2],
  ]
) // Gana el bien.
