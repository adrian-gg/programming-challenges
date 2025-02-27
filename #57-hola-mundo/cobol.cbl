
identification division.
program-id. helloworld.

environment division.
configuration section.
input-output section.

data division.

file section.

working-storage section.

77 mensaje picture x(32) value '¡Hola mundo!'.

procedure division.

  display mensaje.

  stop run.