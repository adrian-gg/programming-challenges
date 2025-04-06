function weatherSimulator(temperature, rain, days) {
  const weather = {
    days: [],
    min_temp: temperature,
    max_temp: temperature,
    rain_days: 0,
  }

  let currentRain = rain
  let currentTemperature = temperature

  for (let i = 0; i < days; i++) {
    const day = {
      day: i + 1,
      temperature: currentTemperature,
      rain_probability: currentRain,
    }

    const isItGoingToRain = currentRain === 100
    const temperatureWillChange = Math.random() < 0.1

    weather.days.push(day)

    if (temperatureWillChange) {
      currentTemperature += Math.random() < 0.5 ? -2 : 2
    }

    if (currentTemperature > 25) {
      currentRain = Math.min(100, currentRain + 20)
    } else if (currentTemperature < 5) {
      currentRain = Math.max(0, currentRain - 20)
    }

    if (isItGoingToRain) {
      currentTemperature += -1
      weather.rain_days += 1
    }

    if (weather.min_temp > currentTemperature) {
      weather.min_temp = currentTemperature
    } else if (weather.max_temp < currentTemperature) {
      weather.max_temp = currentTemperature
    }
  }

  console.log(weather)
}

weatherSimulator(24, 100, 365)
