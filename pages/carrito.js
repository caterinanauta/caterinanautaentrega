const productos = [

{nombre: 'Sansiviera', tipo: 'plantaInterior', precio: 2000 },
{nombre: 'AlocasiaAmazonica', tipo:'plantaExterior', precio: 3000},
{nombre: 'MacetaDeBarro', tipo: 'maceta', precio: 3000},
];
let carrito = []

alert('BIENVENIDO AL E-SHOP DE YuKa');

let seleccion = prompt('¿Desea comprar algun producto? si/no');

while(seleccion != "si" && seleccion != "no"){
    alert("Ingrese si o no")
    seleccion = prompt ("Desea comprar algo? si/no")
}

if(seleccion == "si"){
    alert("A continuacion nuestros productos disponibles ");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio );
    alert(todosLosProductos.join(" - "));
}else if(seleccion == "no"){
    alert('Gracias por visitarnos')
}

while (seleccion != "no"){
    let producto = prompt ("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "Sansiviera" || producto == "AlocasiaAmazonica" || producto == "MacetaDeBarro"){
        switch(producto){
            case "Sansiviera":
                precio = 2000;
                break;
            case "AlocasiaAmazonica":
                precio = 3000;
                break;
            case "Sansiviera":
                precio = 3000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));
        
        carrito.push({producto, unidades, precio})
        console.log(carrito);
    }else{
        alert("No tenemos ese producto")
    }
seleccion = prompt("Desea seguir comprando?")

while (seleccion === "no"){
    alert("Gracias por visitarnos!");
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto},unidades: ${carritoFinal.unidades},total a pagar${carritoFinal.unidades * carritoFinal.precio}`)
});
break;
}
}
        


