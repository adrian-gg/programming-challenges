import {
  access,
  appendFile,
  constants,
  readFile,
  truncate,
  unlink,
  writeFile,
} from "fs"
import { createInterface } from "readline"

const FILE_PATH = "./#86-txt/text.txt"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const writeContent = (text) => {
  appendFile(FILE_PATH, text, (err) => {
    !err && console.log("\nCONTENIDO GUARDADO!\nContinue escribiendo...")
  })
}

const openLineEditor = () => {
  rl.on("line", (input) => {
    input === "" ? rl.close() : writeContent(`${input}\n`)
  })
}

const deleteFile = () => {
  unlink(FILE_PATH, (err) => {
    if (err) {
      console.error("Error al eliminar el archivo: ", err)
      return
    }
    console.log("ARCHIVO ELIMINADO!")
    rl.close()
  })
}

const deleteContent = () => {
  truncate(FILE_PATH, 0, (err) => {
    !err && console.log("CONTENIDO BORRADO!\nContinue escribiendo...")
  })
}

const printContent = () => {
  readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo: ", err)
      return
    }
    console.log("CONTENIDO DEL ARCHIVO: \n")
    console.log("-------------------------")
    console.log(data.trim())
    console.log("-------------------------")
  })
}

access(FILE_PATH, constants.F_OK, (err) => {
  if (!err) {
    const question =
      "El archivo existe, desea: \n\n" +
      "1. Continuar escribiendo\n2. Sobreescribirlo\n3. Eliminarlo\n"
    rl.question(question, (input) => {
      switch (input) {
        case "1":
          printContent()
          openLineEditor()
          break
        case "2":
          deleteContent("")
          openLineEditor()
          break
        case "3":
          deleteFile()
          break
        default:
          console.log("opción no válida")
          break
      }
    })
  } else {
    writeFile(FILE_PATH, "", (e) => {
      if (e) {
        console.error("Error al crear archivo: ", e)
        return
      }
      console.log("ARCHIVO CREADO!\nIngrese su contenido")
      openLineEditor()
    })
  }
})
