function templateEngine(templateString, data) {
  let result = templateString

  result = result.replace(/{{\s*(\w+)\s*}}/g, (match, variableName) => {
    if (data.hasOwnProperty(variableName)) {
      return data[variableName]
    }
    return ""
  })

  return result
}

const template1 = "Hola, {{ name }}! Tienes {{ age }} años."
const data1 = { name: "Alice", age: 30 }
console.log(templateEngine(template1, data1)) // "Hola, Alice! Tienes 30 años."

const template2 = "El producto es {{ product }} y el precio es {{ price }}."
const data2 = { product: "Libro" }
console.log(templateEngine(template2, data2)) // "El producto es Libro y el precio es ."

const template3 = "Usuario: {{user_name}} - Email: {{  user_email  }}."
const data3 = { user_name: "Bob", user_email: "bob@example.com" }
console.log(templateEngine(template3, data3)) // "Usuario: Bob - Email: bob@example.com."

const template4 = "Esta es una plantilla sin variables."
const data4 = {}
console.log(templateEngine(template4, data4)) // "Esta es una plantilla sin variables."
