/*
 * Reto #35
 * BATALLA POKÉMON
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */

function battle(attacker, defender, attack, defense) {
  const typePokemons = {
    WATER: "Agua",
    FIRE: "Fuego",
    GRASS: "Planta",
    ELECTRIC: "Eléctrico",
  }
  const typeEffectivity = {
    WATER: {
      effective: "FIRE",
      noeffective: "GRASS",
    },
    FIRE: {
      effective: "GRASS",
      noeffective: "WATER",
    },
    GRASS: {
      effective: "WATER",
      noeffective: "FIRE",
    },
    ELECTRIC: {
      effective: "WATER",
      noeffective: "GRASS",
    },
  }

  if (
    attack <= 0 ||
    attack > 100 ||
    defense <= 0 ||
    defense > 100 ||
    !typePokemons[attacker] ||
    !typePokemons[defender]
  )
    return "Parámetros no válidos"

  let effectivity =
    typeEffectivity[attacker].effective === defender
      ? 2
      : typeEffectivity[attacker].noeffective === defender ||
        attacker === defender
      ? 0.5
      : 1
  let damage = 50 * (attack / defense) * effectivity
  return damage
}

console.log(battle("WATER", "FIRE", 50, 30)) //166.66666666666669
console.log(battle("FIRE", "WATER", 50, 30)) //41.66666666666667
console.log(battle("FIRE", "FIRE", 50, 30)) //41.66666666666667
console.log(battle("GRASS", "ELECTRIC", 30, 50)) //30
console.log(battle("WATER", "FIRE", 101, -10)) // Parámetros no válidos
