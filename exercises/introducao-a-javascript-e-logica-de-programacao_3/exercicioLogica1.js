let number = 5;
let linha = "";

if (number > 1) {
  for (let index = 0; index < number; index += 1) {
    linha += "*";
  }
  for (let index = 0; index < number; index += 1) {
    console.log(linha);
  }
}
