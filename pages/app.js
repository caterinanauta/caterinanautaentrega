let usuario;
let codigoPostal;
let direccionDeEnvio;
let precioItem;
let nombreItem;
let cantidad;
let total = 0;
let opcion;


alert('Bienvenido al carrito de compras de YuKa');
usuario = prompt('Ingrese su usuario');
codigoPostal = prompt('Ingrese su Codigo Postal');
direccionDeEnvio = prompt('Ingrese la direccion de entrega');

while (usuario == "" || codigoPostal == "" || direccionDeEnvio == ""){
    alert('No se registro algun dato, vuelva a intentarlo');
    usuario = prompt('Ingrese su usuario');
    codigoPostal = prompt('Ingrese su Codigo Postal');
    direccionDeEnvio = prompt('Ingrese la direccion de entrega');
} alert ("Datos registrados");

do{
   nombreItem = prompt('ingrese nombre del producto que desea comprar');
   precioItem = Number(prompt('Ingrese su precio'));


   while (precioItem < 0) {
    precioItem = parseInt(prompt('Precio invalido, ingrese otro')); 
   }

    cantidad = parseInt(prompt('ingrese cantidad'));

    while (cantidad <= 0) {
        cantidad = parseInt(prompt('cantidad invalida, ingrese otra'));
    }
         total = total + cantidad*precioItem; 
    
    opcion = prompt('Desea ingresar otro item?');
   }while(opcion =='si');

alert('el total para ' + usuario + ' es de $' + total);