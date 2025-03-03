const getData = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Ups! Somethig was wrong :(")
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

async function getPokemon(pokemon) {
  console.dir(await getData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))
}

getPokemon("ditto")
