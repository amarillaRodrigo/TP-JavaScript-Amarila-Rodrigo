edadUsuario = parseInt(prompt('Ingrese su edad en años: '))

if (edadUsuario == 0 && edadUsuario <= 12) {
    console.log('Se encuentra en el rango de edad: niño')
} else if (edadUsuario >= 13 && edadUsuario <= 19) {
    console.log('Se encuentra en el rango de edad: adolescente')
} else if (edadUsuario >= 20 && edadUsuario <= 59) {
    console.log('Se encuentra en el rango de edad: adulto')
} else if (edadUsuario >=60 && edadUsuario <= 115) {
    console.log('Se encuentra en el rango de edad: adulto mayor')
} else {
    console.log('No ingresó una edad valida')
}