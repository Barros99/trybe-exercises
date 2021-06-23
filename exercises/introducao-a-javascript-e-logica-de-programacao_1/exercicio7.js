let nota = 5;

if (nota < 0 || nota > 100) {
  console.log("Valor inválido!");
  return;
} else if (nota >= 90 && nota <= 100) {
  nota = "A";
} else if (nota >= 80) {
  nota = "B";
} else if (nota >= 70) {
  nota = "C";
} else if (nota >= 60) {
  nota = "D";
} else if (nota >= 50) {
  nota = "E";
} else if (nota < 50 && nota >= 0) {
  nota = "F";
}
console.log(nota);
