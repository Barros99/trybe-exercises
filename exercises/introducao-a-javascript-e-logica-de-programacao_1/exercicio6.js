let peca = "rainha";

switch (peca.toLowerCase()) {
  case "cavalo":
    console.log("L");
    break;
  case "peao":
    console.log(
      "Uma casa para frente, exceto na linha de partida no qual pode-se andar duas casas, 'come' na diagonal."
    );
    break;
  case "rainha":
    console.log("Em qualquer direção quantas casas quiser");
    break;
  case "rei":
    console.log("Uma casa em qualquer direção");
    break;
  case "torre":
    console.log("Horizontal ou vertical quantas casas quiser");
    break;
  case "bispo":
    console.log("Diagonias quantas casas quiser");
    break;
  default:
    console.log("Essa peça não existe!");
    break;
}
