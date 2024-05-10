let numero1 = parseFloat(prompt('Ingrese el primer numero:'))
let numero2 = parseFloat(prompt('Ingrese el segundo numero:'))
let numero3 = parseFloat(prompt('Ingrese el tercer numero:'))

if (numero1 <= numero2 && numero1 <= numero3){
    if (numero2 <= numero3) {
        console.log(numero1, numero2, numero3)
    } else {
        console.log(numero1, numero3, numero2)
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        console.log(numero2, numero1, numero3)
    } else {
        console.log(numero2, numero3, numero1)
    }
} else {
    if (numero1 <= num2) {
        console.log(numero3, numero1, numero2)
    } else {
        console.log(numero3, numero2, numero1)
    }
}