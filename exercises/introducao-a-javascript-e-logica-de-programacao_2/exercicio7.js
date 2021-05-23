let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;

for (const iterator of numbers) {
  if (iterator - numbers[0] < 0) {
    menor = iterator;
  }
}
console.log(menor);
