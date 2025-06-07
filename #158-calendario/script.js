function getCalendar(year, month) {
  const daysHead = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
  const daysBody = []

  const dateTarget = new Date(year, month - 1, 1)
  const dateNext = new Date(year, month, 0)

  const firstDayOfWeek = dateTarget.getDay()
  const totalDaysInMonth = dateNext.getDate()

  let currentDay = 1

  for (let i = 0; i < daysHead.length; i++) {
    daysBody.push(new Array(7).fill("   "))
  }

  let weekIndex = 0
  for (let day = 0; day < 7; day++) {
    if (day === firstDayOfWeek) {
      daysBody[weekIndex][day] = String(currentDay).padStart(3, " ")
      currentDay++
      break
    }
  }

  while (currentDay <= totalDaysInMonth) {
    const dayOfWeek = (firstDayOfWeek + currentDay - 1) % 7
    weekIndex = Math.floor((firstDayOfWeek + currentDay - 1) / 7)
    daysBody[weekIndex][dayOfWeek] = String(currentDay).padStart(3, " ")
    currentDay++
  }

  const header = daysHead.join(" ")
  const body = daysBody
    .filter((row) => row.some((cell) => cell !== "   "))
    .map((r) => r.join(" "))
    .join("\n")

  return `${header}\n${body}`
}

console.log(getCalendar(2025, 7))
