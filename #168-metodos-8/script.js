function getByPath(obj, path) {
  const keys = path.split(".")
  let current = obj

  for (const key of keys) {
    if (current == null || !current.hasOwnProperty(key)) {
      return undefined
    }
    current = current[key]
  }

  return current
}

console.log(getByPath({ a: { b: { c: 42 } } }, "a.b.c")) // 42
