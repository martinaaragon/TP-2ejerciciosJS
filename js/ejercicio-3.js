//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = "";
let texto;

do{
        texto = prompt("Ingrese cadena de texto");
        if(texto !== null){
                cadena += texto + '-';
        }

}while (texto !== null);
if (confirm("¿Estas seguro de que deseas salir?")){
        alert(cadena.slice(0, -1));
}
