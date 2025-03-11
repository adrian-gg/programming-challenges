async function webScrapper(url) {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Error al obtener los datos.")
      return res.text()
    })
    .then((data) => {
      const html = data
      /* .split(
          '<span class="rt-Text none css-vazfq2">&quot;</span>Agenda<span class="rt-Text none css-vazfq2">&quot;</span>'
        )
        .pop()
        .split(
          '<span class="rt-Text none css-vazfq2">&quot;</span>Sorteos<span class="rt-Text none css-vazfq2">&quot;</span>'
        )
        .shift() */

      const regex = /(\d{2}:\d{2})\s+<\/strong>(.*?)<\/span>/g
      const matches = html.matchAll(regex)

      if (matches) {
        for (const match of matches) {
          console.log(`${match[1]} ${match[2].replaceAll("&quot;", '"')}`)
        }
      }
    })
    .catch((err) => console.error(err))
}

webScrapper("https://holamundo.day")
/*
16:00 Bienvenida
16:30 Charla | ¡No dejes para mañana tu código de hoy! Cómo vencer la procrastinación en programación
17:00 Charla | UX Design
17:30 Taller | Crea tu propio bot de Telegram con Python
18:00 Sorteos
18:30 Charla | Desbloquea tu creatividad: Prompt engineering con Gemini AI y ChatGPT
19:00 Taller | Desmitificando el Testing: Aprende a probar como un profesional
19:30 Charla | Ser autodidacta en el mundo del software
20:00 Final Hackathon
20:30 Sorteos
21:00 Charla | Cómo entrar el mundo de freelance internacional: motivaciones, estrategias y retos
21:30 Taller | Open Source: Configura tu entorno para contribuir a proyectos de código abierto
22:00 Sorteos
22:30 Charla | Soft skills que todo programador debería tener
23:00 Charla | ¿Qué hace que un GitHub sea "bueno"?
23:30 Despedida
*/
