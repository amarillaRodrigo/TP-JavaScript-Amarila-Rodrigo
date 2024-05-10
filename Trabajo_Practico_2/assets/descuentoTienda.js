let articulo = prompt('¿Que articulo compra?');
let numArticulos = parseInt(prompt('Cuantas unidades lleva?'))
let precioUnit = parseInt(prompt('Ingrese el precio de su producto por unidad:'))

if(numArticulos > 1) {
    let precioTotal = numArticulos * precioUnit;
    if (numArticulos >= 10){
        if (precioTotal >= 20000){
            let descuento = precioTotal - (precioTotal * 0.15);
            console.log('Usted obtuvo un descuento del 15%, el total a pagar es ', descuento);
        } else {
            console.log('El precio total de productos no supera los $20000, usted debe pagar', precioTotal);
        }
    } else {
        console.log('Usted compro menos de 10 productos el precio es: ', precioTotal);
    }
} else if (numArticulos === 0){
    console.log('Usted no puede comprar 0 articulos.');
} else if( isNaN(numArticulos) || isNaN(precioUnit) ) { 
    console.log('No ha ingresado valores numericos en el numero de articulos y en el precio unitario.')
} else {
    console.log('Usted compro un solo producto, el precio a pagar es ', precioUnit);
};

    



