let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (const iterator of numbers) {
    soma+=iterator
}
let mediaAritmetica = soma / numbers.length;
console.log("Soma = " + soma + "\nMédia = " + mediaAritmetica);
