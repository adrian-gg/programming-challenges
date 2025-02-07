/*
 * Reto #37
 * LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"
 * Dificultad: MEDIA
 * Enunciado: ¡Han anunciado un nuevo "The Legend of Zelda"! Se llamará "Tears of the Kingdom"
 * y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto
 *   puedes usar el mes, o incluso inventártelo)
 */

const ZeldaGame = {
  THE_LEGEND_OF_ZELDA: { title: "The Legend of Zelda", date: "1986-02-21" },
  THE_ADVENTURE_OF_LINK: {
    title: "Zelda II: The Adventure of Link",
    date: "1987-01-14",
  },
  A_LINK_TO_THE_PAST: {
    title: "The Legend of Zelda: A Link to the Past",
    date: "1991-11-21",
  },
  LINKS_AWAKENING: {
    title: "The Legend of Zelda: Link's Awakening",
    date: "1993-06-06",
  },
  OCARINA_OF_TIME: {
    title: "The Legend of Zelda: Ocarina of Time",
    date: "1998-11-21",
  },
  MAJORAS_MASK: { title: "Zelda: Majora's Mask", date: "2000-04-27" },
  ORACLE_OF_SEASONS: {
    title: "The Legend of Zelda: Oracle of Seasons",
    date: "2001-02-27",
  },
  ORACLE_OF_AGES: {
    title: "The Legend of Zelda: Oracle of Ages",
    date: "2001-02-27",
  },
  FOUR_SWORDS: {
    title: "The Legend of Zelda: Four Swords",
    date: "2002-12-03",
  },
  THE_WIND_WAKER: {
    title: "The Legend of Zelda: The Wind Waker",
    date: "2002-12-13",
  },
  FOUR_SWORDS_ADVENTURES: {
    title: "The Legend of Zelda: Four Swords Adventures",
    date: "2004-03-18",
  },
  THE_MINISH_CUP: {
    title: "The Legend of Zelda: The Minish Cap",
    date: "2004-11-04",
  },
  TWILIGHT_PRINCES: {
    title: "The Legend of Zelda: Twilight Princess",
    date: "2006-11-19",
  },
  PHANTOM_HOURGLASS: {
    title: "The Legend of Zelda: Phantom Hourglass",
    date: "2007-06-23",
  },
  SPIRIT_TRACKS: {
    title: "The Legend of Zelda: Spirit Tracks",
    date: "2009-12-07",
  },
  SKYWARD_SWORD: {
    title: "The Legend of Zelda: Skyward Sword",
    date: "2011-11-18",
  },
  A_LINK_BETWEEN_WORLDS: {
    title: "The Legend of Zelda: A Link Between Worlds",
    date: "2013-11-23",
  },
  TRI_FORCE_HEROES: {
    title: "The Legend of Zelda: Tri Force Heroes",
    date: "2015-10-11",
  },
  BREATH_OF_THE_WILD: {
    title: "The Legend of Zelda: Breath of the Wild",
    date: "2017-03-03",
  },
  TEARS_OF_THE_KINGDOM: {
    title: "The Legend of Zelda: Tears of the Kingdom",
    date: "2023-05-12",
  },
}

function timeBetweenRelease(gameOne, gameTwo) {
  if (gameOne.title === gameTwo)
    return "Se está intentando comparar el mismo juego"

  const dateGameOne = new Date(gameOne.date + "T12:00:00")
  const dateGameTwo = new Date(gameTwo.date + "T12:00:00")

  const newDate = new Date(Math.abs(dateGameOne - dateGameTwo))
  const years = Math.abs(dateGameOne.getFullYear() - dateGameTwo.getFullYear())
  const days = Math.round(newDate.setFullYear(1970) / 1000 / 60 / 60 / 24)

  return `Entre la fecha de lanzamiento de ${gameOne.title} y ${gameTwo.title} hay ${years} años y ${days} días`
}

console.log(
  timeBetweenRelease(
    ZeldaGame.THE_LEGEND_OF_ZELDA,
    ZeldaGame.TEARS_OF_THE_KINGDOM
  )
) //hay 37 años y 80 días
console.log(
  timeBetweenRelease(
    ZeldaGame.TEARS_OF_THE_KINGDOM,
    ZeldaGame.THE_LEGEND_OF_ZELDA
  )
) //hay 37 años y 80 días
console.log(
  timeBetweenRelease(
    ZeldaGame.THE_LEGEND_OF_ZELDA,
    ZeldaGame.THE_ADVENTURE_OF_LINK
  )
) //han pasado 0 años y 327 días
console.log(
  timeBetweenRelease(
    ZeldaGame.THE_ADVENTURE_OF_LINK,
    ZeldaGame.THE_LEGEND_OF_ZELDA
  )
) //han pasado 0 años y 327 días
console.log(
  timeBetweenRelease(
    ZeldaGame.THE_LEGEND_OF_ZELDA,
    ZeldaGame.THE_LEGEND_OF_ZELDA
  )
) //Se está intentando comparar el mismo juego
console.log(
  timeBetweenRelease(ZeldaGame.ORACLE_OF_SEASONS, ZeldaGame.ORACLE_OF_AGES)
) //han pasado 0 años y 0 días
