const removeAccents = (text) =>
  text
    .replace(/ñ/g, "#")
    .replace(/Ñ/g, "%")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/#/g, "ñ")
    .replace(/%/g, "Ñ")

function parse(text) {
  const formatedText = removeAccents(text).toLowerCase()
  const words = [...formatedText.match(/[^\W]+/g)]

  let wordsCount = words.length
  let letterCount = Math.round(
    words.reduce((acc, word) => acc + word.length, 0) / wordsCount
  )
  let sentencesCount = [...formatedText.match(/[^\.]+\./g)].length
  let longestWord = [...new Set([...words.sort((a, b) => a.length - b.length)])]
    .filter((w) => w.length === words[words.length - 1].length)
    .join(", ")

  console.log(`El número total de palabras es: ${wordsCount}`)
  console.log(`La longitud media es: ${letterCount}`)
  console.log(`Número de oraciones: ${sentencesCount}`)
  console.log(`La palabra o palabras más largas son: ${longestWord}`)
}

parse(`
  Nos encontramos en un
  periodo de guerra civil. Las
  naves espaciales rebeldes,
  atacando desde una base
  oculta, han logrado su 
  primera victoria contra
  el malvado Imperio
  Galáctico.
  
  Durante la batalla, los 
  espías rebeldes han
  conseguido apoderarse de 
  los planos secretos del
  arma total y definitiva del
  Imperio, la ESTRELLA
  DE LA MUERTE,
  una estación espacial
  acorazada, llevando en sí
  potencia suficiente para
  destruir a un planeta
  entero.
  
  Perseguida por los 
  siniestros agentes del 
  Imperio, la Princesa Leia 
  vuela hacia su patria, a
  bordo de su nave espacial,
  llevando consigo los
  planos robados, que
  pueden salvar a su pueblo
  y devolver la libertad a la
  galaxia....
  `)
//El número total de palabras es: 105
//La longitud media es: 5
//Número de oraciones: 4
//La palabra o palabras más largas son: encontramos
