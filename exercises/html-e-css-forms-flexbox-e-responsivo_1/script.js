// fonte do objeto contendo os Estados e suas respectivas siglas
// https://gist.github.com/ricardobarantini/5665214

const estados = {
  Acre: "AC",
  Alagoas: "AL",
  Amapá: "AP",
  Amazonas: "AM",
  Bahia: "BA",
  Ceará: "CE",
  "Distrito Federal": "DF",
  "Espírito Santo": "ES",
  Goiás: "GO",
  Maranhão: "MA",
  "Mato Grosso": "MT",
  "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG",
  Pará: "PA",
  Paraíba: "PB",
  Paraná: "PR",
  Pernambuco: "PE",
  Piauí: "PI",
  "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS",
  Rondônia: "RO",
  Roraima: "RR",
  "Santa Catarina": "SC",
  "São Paulo": "SP",
  Sergipe: "SE",
  Tocantins: "TO",
};
for (const key in estados) {
  if (Object.hasOwnProperty.call(estados, key)) {
    const selectEstados = document.getElementById("input-estados");
    const optionEstado = document.createElement("option");
    optionEstado.value = estados[key];
    optionEstado.innerText = key;
    selectEstados.appendChild(optionEstado);
  }
}
const campos = {
  "input-nome": [40, "r"],
  "input-email": [50, "r"],
  "input-cpf": [11, "r"],
  "input-endereco": [200, "r"],
  "input-cidade": [28, "r"],
  "input-resumo": [1000, "r"],
  "input-cargo": [40, "r"],
  "input-descricao-cargo": [500, "r"],
  "input-data-inicio": [null, "r"],
};

function obrigatorio(idCampo) {
  const inputCampo = document.getElementById(idCampo);
  const nomeCampoUper = inputCampo.getAttribute("name").toUpperCase();
  if (inputCampo.value.trim() === "") {
    alert(`O campo ${nomeCampoUper} é obrigatório`);
    return inputCampo.focus();
  }
}
function validaSelect(idSelect) {
  const select = document.getElementById(idSelect);
  for (let index = 0; index < select.length; index += 1) {
    const element = select[index];
    console.log(element.selected);
  }
}
validaSelect("input-estados");
function validatamanho(lista) {
  for (const key in lista) {
    if (Object.hasOwnProperty.call(lista, key)) {
      const input = document.getElementById(key);
      const nome = input.getAttribute("name").toUpperCase();
      if (input.value.length > lista[key]) {
        alert(`O Campo ${nome} não pode ser maior que ${lista[key]}`);
        return input.autofocus;
      }
      console.log(nome);
    }
  }
}
function validaData() {
  const data = document.getElementById("input-data-inicio").value;
  const a = data;
  // https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
  const lol = a.split("-").map((x) => +x);
  if (lol[0] < 0) {
    alert("O ano não pode ser negativo");
  } else if (lol[1] < 1 || lol[1] > 12) {
    alert("O mês deve está contido entre 1 e 12");
  } else if (lol[2] < 1 || lol[2] > 31) {
    alert("O mês deve está contido entre 1 e 31");
  }
  // console.log(typeof lol[0]);
  // if (data.match(tel.match(/(\d{2})(\d{5})(\d{4})/))
  //   console.log(data);
  // }
}
validaData();

function validar() {
  event.preventDefault();
  validatamanho(campos);
  obrigatorio("input-descricao-cargo");
}

// document.getElementById("btn-enviar").addEventListener("click", validar);
