function renameKeys(obj, mapper) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = mapper.hasOwnProperty(key) ? mapper[key] : key
    acc[newKey] = value
    return acc
  }, {})
}

const obj = { a: 1, b: 2, c: 3 }
const renamed = renameKeys(obj, { a: "x", b: "y" })
console.log(renamed)
