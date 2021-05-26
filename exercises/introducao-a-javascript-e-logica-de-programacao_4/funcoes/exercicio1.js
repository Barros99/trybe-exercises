function epalindromo(palavra) {
  let reverseWord = [];
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    reverseWord += palavra[index];
  }
  if (palavra === reverseWord) {
    return true;
  }
  return false;
}
console.log(epalindromo("arara"));
