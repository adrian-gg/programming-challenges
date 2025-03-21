function countdown(count, seconds) {
  if (
    typeof count !== "number" ||
    typeof seconds !== "number" ||
    count % 1 !== 0 ||
    seconds % 1 !== 0 ||
    count < 0 ||
    seconds < 0
  )
    return "Parámetros no válidos"

  setTimeout(() => {
    console.log(count)
    if (count > 0) {
      countdown(count - 1, seconds)
    }
  }, seconds * 1000)
}

countdown(5, 1)
