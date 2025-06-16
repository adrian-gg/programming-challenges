function flatten(obj, prefix = "", res = {}) {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue

    const fullKey = prefix ? `${prefix}.${key}` : key
    const value = obj[key]

    if (
      typeof value === "object" &&
      value !== null &&
      !(value instanceof Date) &&
      !(value instanceof Set) &&
      !(value instanceof Map)
    ) {
      flatten(value, fullKey, res)
    } else {
      res[fullKey] = value
    }
  }

  return res
}

console.log(flatten({ a: { b: 2 } })) //{ 'a.b': 2 }

console.log(
  flatten({
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: [4, 5, { g: 6 }],
  })
) //{ a: 1, 'b.c': 2, 'b.d.e': 3, 'f.0': 4, 'f.1': 5, 'f.2.g': 6 }
