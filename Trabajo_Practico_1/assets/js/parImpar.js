let numero = parseInt(prompt('Ingrese un numero entero:'));

if (numero % 1 === 0) {
    if (numero % 2 === 0) {
        console.log('El numero es Par.');
    } else {
        console.log('El numero es Impar.');
    }
} else {
    console.log('No ha ingresado un numero entero, por favor intentelo otra vez.')
}