let ladoA = -45;
let ladoB = 45;
let ladoC = 90;
let resposta;

if ((ladoA || ladoB || ladoC) < 0) {
  resposta = false;
  console.log("Um dos ângulos é inválido");
} else if (ladoA + ladoB + ladoC === 180) {
  resposta = true;
} else if (ladoA + ladoB + ladoC < 180) {
  resposta = false;
}
console.log(resposta);
