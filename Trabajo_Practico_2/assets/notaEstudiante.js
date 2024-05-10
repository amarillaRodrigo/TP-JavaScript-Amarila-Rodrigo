let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre:"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre:"));
let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre:"));
let promedio = (nota1 + nota2 + nota3) / 3;
if (
    isNaN(nota1) ||
    isNaN(nota2) ||
    isNaN(nota3) ||
    nota1 == ""  ||
    nota2 == ""  ||
    nota3 == ""
    ) {
    console.log("Ingrese solo numeros");
    } else if (
        nota1 < 0 ||
        nota1 > 10 ||
        nota2 < 0 ||
        nota2 > 10 ||
        nota3 < 0 ||
        nota3 > 10
      ) {
        console.log('Ingrese solo numeros entre 0 y 10.')
      } else {
        switch (true) {
            case promedio<=3 && promedio>=1:
            console.log ("Nota Insuficiente")
            break
            case promedio == 4 || promedio == 5:
            console.log ("Nota Regular")
            break
            case promedio == 6 || promedio == 7:
            console.log ("Nota Buena")
            break
            case promedio == 8 || promedio == 9:
            console.log ("Nota Muy Buena")
            break
            case promedio == 10:
            console.log ("Nota Sobresaliente")
            break;
            default:
                console.log ("El promedio no pudo ser calculado, debido a los valores ingresados.")
                break;
        }
    }