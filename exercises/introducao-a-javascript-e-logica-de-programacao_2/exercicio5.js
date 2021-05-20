let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (const element of numbers) {
  if (element >= maior) {
    maior = element;
  }
}
console.log(maior);
