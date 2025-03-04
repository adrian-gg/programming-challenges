function getParams(url) {
  const params = {}
  if (url.includes("?")) {
    url
      .split("?")[1]
      .split("&")
      .forEach((p) => {
        const param = p.split("=")
        params[param[0]] = param[1]
      })
  }

  return params
}

console.log(
  getParams(
    "https://retosdeprogramacion.com?year=2023&challenge=0&languaje=python"
  )
) //{ year: '2023', challenge: '0', languaje: 'python' }
