function findReplaceString(s, indices, sources, targets) {
  let accIndex = 0

  sources.forEach((element, i) => {
    const iToReplace = indices[i] + accIndex

    if (s.slice(iToReplace, element.length + iToReplace) === element) {
      s =
        s.slice(0, iToReplace) +
        targets[i] +
        s.slice(element.length + iToReplace)

      accIndex += targets[i].length - 1
    }
  })

  return s
}

console.log(findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"])) //"eeebffff"
console.log(findReplaceString("abcd", [0, 2], ["ab", "ec"], ["eee", "ffff"])) //"eeecd"
