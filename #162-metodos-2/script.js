function zig(obj1, obj2) {
  if (obj1.length !== obj2.length)
    return "Ambas listas deben tener el mismo número de elementos."

  return obj1.map((e, i) => [e, obj2[i]])
}

console.log(zig([1, 2], ["a", "b"])) //[ [ 1, 'a' ], [ 2, 'b' ] ]
