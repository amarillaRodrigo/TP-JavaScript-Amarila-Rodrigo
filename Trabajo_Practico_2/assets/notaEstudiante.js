let notaPrimero = parseInt(prompt('Ingrese una nota para el primer trimestre:'))

let notaSegundo = parseInt(prompt('Ingrese una nota para el segundo trimestr:'))

let notaTercero = parseInt(prompt('Ingrese una nota para el tercer trimestre:'))


let promedio =  (notaPrimero + notaSegundo + notaTercero) / 3;


if (promedio > 0 && promedio <=10){
    switch(promedio) {

        case 1:
        case 2:
        case 3:
            console.log('Nota Insuficiente');
            break;
        case 4:
        case 5:
            console.log('Nota Regular');
            break;
        case 6:
        case 7:
            console.log('Nota Buena');
            break;
        case 8:
        case 9:
            console.log('Nota Muy Buena');
            break;
        case 10:
            console.log('Nota Sobresaliente');
            break;
    }
} else {
    console.log('El promedio no pudo ser calculado porque no ha ingresado notas validas.')
}