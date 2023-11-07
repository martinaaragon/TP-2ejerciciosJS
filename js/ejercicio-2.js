let numero = parseInt(prompt("Ingrese un número del 1 al 10"));
let calificacion;

if ( numero >= 0 && numero <= 10) {
  if ( numero >= 0 && numero <= 2) {
    calificacion = "Muy deficiente";
  } else if (numero >= 3 && numero <= 4) {
    calificacion = "Insuficiente";
  } else if (numero >= 5 && numero <= 6) {
    calificacion = "Suficiente";
  } else if ( numero === 7) {
    calificacion = "Bien";
  } else if (numero >= 8 && numero <= 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  alert("La calificación es: " + calificacion);
} else {
 
  alert("La nota ingresada no está en el rango válido (0-10).");
}