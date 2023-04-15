let item;
let suma = 0;
let promedio;
let cantidad;

cantidad= Number(prompt("Cuantos items desea ingresar"));

for (let i = 1 ; i <= cantidad ; i++)
{
precioItem = Number(prompt ("Ingrese precio"));
console.log("acumulandose...:" + suma);
suma = suma + precioItem;
}

promedio = suma / cantidad;

console.log("el promedio es " + promedio);

let continuar = "si";

while (continuar != "basta")
{
    console.log ("Agregando un nuevo item al carrito de compras..");
    continuar = prompt("Desea agregar otro item? si/basta");
}

console.log("Resto del codigo...");


