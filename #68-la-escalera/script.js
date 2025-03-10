function drawSteps(steps) {
  if (steps === 0) console.log("__")
  else if (steps > 0)
    for (let i = 0; i < steps; i++) {
      if (i === 0) console.log("  ".repeat(steps - i) + "_")
      console.log("  ".repeat(steps - i - 1) + "_|")
    }
  else
    for (let i = 0; i < Math.abs(steps); i++) {
      if (i === 0) console.log("  ".repeat(i) + " _")
      console.log("  ".repeat(i + 1) + "|_")
    }
}

drawSteps(0)
drawSteps(4)
drawSteps(20)
drawSteps(-4)
drawSteps(-20)
