
/* Cree un algoritmo que permita determinar
   la calificación en letras de un alumno
   
   Si la nota se encuentra entre 100 a 90 = A
   Si la nota se encuentra entre 80 a 89 = B
   Si la nota se encuentra entre 70 a 79 = C
   Si la nota se encuentra entre 60 a 69 = D
   Si la nota es inferior a 60 = F
*/

let nota = 50;
let notaletra = '';

if (nota >= 90) {
    notaletra = 'A';
} else if (nota >= 80) {
    notaletra = 'B';
} else if (nota >= 70) {
    notaletra = 'C';
} else if (nota >= 60) {
    notaletra = 'D';
} else {
    notaletra = 'F';
}

console.log(nota + ' es igual a ' + notaletra);