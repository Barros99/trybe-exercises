let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];

for (const iterator of numbers) {
  if (iterator % 2 == 1) {
    oddNumbers.push(iterator);
  }
}
if (oddNumbers.length == 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(
    "Foram encontrados " +
      oddNumbers.length +
      " números ímpares, correspondentes a " +
      oddNumbers +
      "."
  );
}
