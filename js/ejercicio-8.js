/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Ingrese un número entre 1 y 50"));

if (isNaN(numero) || numero < 1 || numero > 50) {
    alert("Ingrese un número válido");
} else {
    for (let i = 1; i <= numero; i++) {
        let linea = "";

        for (let j = 1; j <= i; j++) {
            linea += j;
        }

        console.log(linea);
    }
}