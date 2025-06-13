function camelToSnake(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase()
}

console.log(camelToSnake("helloWorld")) //"hello_world"
console.log(camelToSnake("parseHTMLText")) //"parse_html_text"
