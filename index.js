const readline = require("readline").createInterface({
  input:process.stdin,
  output:process.stdout
})
readline.question("Escribe un numero de 1 al 3:",(input)=>{
  switch (parseInt(input)) {
    case 1:
      console.log("Has elegido el numero 1")
      break;
    case 2:
      console.log("Has elegido el numero 2")
      break;
    case 3:
      console.log("Has elegido el numero 3")
      break;
    default:
      console.log("El numero no es valido")

  }
  readline.close()
})
