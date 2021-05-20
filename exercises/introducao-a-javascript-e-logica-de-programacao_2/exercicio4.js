let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
let mediaAritmetica = soma / numbers.length;
console.log("Soma = " + soma + "\nMédia = " + mediaAritmetica);
if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
