let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;
for (const element of numbers) {
  if (element - menor === element) {
    menor = element;
  }
  if (element < menor) {
    menor = element;
  }
}
console.log(menor);
