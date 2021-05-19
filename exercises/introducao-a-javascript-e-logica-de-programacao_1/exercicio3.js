let num1 = 120;
let num2 = 14;
let num3 = 78;
let maior;

if (num1 > num2) {
  maior = num1;
} else if (num2 > num3) {
  maior = num2;
} else if (num3 > num1) {
  maior = num3;
}
console.log('O maior número entre os três é '+maior);
