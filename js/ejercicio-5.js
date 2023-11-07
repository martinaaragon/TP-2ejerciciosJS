/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

let numero;
let letra;

do {
    numero = prompt("Introduce un número de DNI:");

    if (numero !== null) {
        numero = parseInt(numero);

        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            alert("Introduce un número válido");
            alert("¿Desea volver a ingresar otro DNI?");
        } else {
            letra = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(numero % 23);
            alert("La letra correspondiente al número " + numero + " es: " + letra);
        }
    }
} while (numero !== null);