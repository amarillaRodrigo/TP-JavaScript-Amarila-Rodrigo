let diaSemana = parseInt(prompt('Ingrese un numero del 1 al 7:'));

if (diaSemana >= 1 && diaSemana <= 7){
    switch(diaSemana){
        case 1: console.log('El dia de la semana seleccionado es Lunes');
        break;
        case 2: console.log('El dia de la semana seleccionado es Martes');
        break;
        case 3: console.log('El dia de la semana seleccionado es Miercoles');
        break;
        case 4: console.log('El dia de la semana seleccionado es Jueves');
        break;
        case 5: console.log('El dia de la semana seleccionado es Viernes');
        break;
        case 6: console.log('El dia de la semana seleccionado es Sabado');
        break;
        case 7: console.log('El dia de la semana seleccionado es Domingo');
        break;
    }
} else {
    console.log('No ha ingresado un numero del 1 al 7, intente nuevamente.')
}