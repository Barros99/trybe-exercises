let recorrentes = "";
let margarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
let tioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (const key in margarida) {
  if (margarida.recorrente === tioPatinhas.recorrente) {
    delete margarida.recorrente;
    delete tioPatinhas.recorrente;
    recorrentes = "Ambos recorrentes";
  }
  console.log(margarida[key] + " e " + tioPatinhas[key]);
}
console.log(recorrentes);
