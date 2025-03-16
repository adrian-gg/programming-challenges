import { createConnection } from "mysql"

const connection = createConnection({
  host: "mysql-5707.dinaserver.com",
  port: "3306",
  user: "mouredev_read",
  password: "mouredev_pass",
  database: "moure_test",
})

connection.connect()

connection.query("SELECT * FROM challenges", (error, rows) => {
  if (error) throw new Error()

  const results = Object.values(JSON.parse(JSON.stringify(rows)))

  results.forEach((challenge) => {
    console.log(
      challenge.id,
      challenge.name,
      challenge.difficulty,
      challenge.date
    )
  })
})

connection.end()

/*
1 EL FAMOSO "FIZZ BUZZ" Fácil 2022-12-25T23:00:00.000Z
2 EL "LENGUAJE HACKER" Fácil 2023-01-01T23:00:00.000Z
3 EL PARTIDO DE TENIS Media 2023-01-08T23:00:00.000Z
4 EL GENERADOR DE CONTRASEÑAS Media 2023-01-15T23:00:00.000Z
5 PRIMO, FIBONACCI Y PAR Media 2023-01-22T23:00:00.000Z
*/
