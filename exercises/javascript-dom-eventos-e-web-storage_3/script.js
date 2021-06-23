function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

function createEachCalendarDay() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const decemberDaysList = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index++) {
    const december = dezDaysList[index];
    const decemberListItem = document.createElement("li");
    decemberListItem.classList.add("day");
    isFridays(dezDaysList[index])
      ? decemberListItem.classList.add("friday")
      : "";
    isHolidays(dezDaysList[index])
      ? decemberListItem.classList.add("holiday")
      : "";
    decemberListItem.innerHTML = december;
    decemberDaysList.appendChild(decemberListItem);
  }
}
createEachCalendarDay();

function isFridays(dia) {
  const sextas = [4, 11, 18, 25];
  for (let index = 0; index < sextas.length; index += 1) {
    if (sextas[index] === dia) {
      return dia;
    }
  }
}

function isHolidays(dia) {
  const feriados = [24, 25, 31];
  for (let index = 0; index < feriados.length; index += 1) {
    if (feriados[index] === dia) {
      return dia;
    }
  }
}

function buttonHolidays(nome) {
  if (nome !== "" || nome !== null) {
    let button = document.createElement("button");
    button.innerText = "Feriados";
    button.setAttribute("id", "btn-holiday");
    document.querySelector(".buttons-container").appendChild(button);
  }
}
buttonHolidays();

const btnHoly = document.querySelector("#btn-holiday");
const ulDays = document.querySelector("#days").children;

function bgChangeHolidays() {
  let liHoliday = document.querySelectorAll(".holiday");
  for (const iterator of liHoliday) {
    if (!iterator.getAttribute("style")) {
      iterator.style.backgroundColor =
        "rgb(" + 255 + "," + 255 + "," + 255 + ")";
    } else if (
      iterator.style.backgroundColor ==
      "rgb(" + 255 + "," + 255 + "," + 255 + ")"
    ) {
      iterator.style.backgroundColor =
        "rgb(" + 238 + "," + 238 + "," + 238 + ")";
    } else iterator.removeAttribute("style");
  }
}
btnHoly.addEventListener("click", bgChangeHolidays);

function buttonFridays(nome) {
  if (nome !== "" || nome !== null) {
    let button = document.createElement("button");
    button.innerText = "Sexta-feira";
    button.setAttribute("id", "btn-friday");
    document.querySelector(".buttons-container").appendChild(button);
  }
}
buttonFridays();

function mufasa() {
  const sextas = [4, 11, 18, 25];
  let liFriday = document.querySelectorAll(".friday");
  for (let index = 0; index < liFriday.length; index += 1) {
    liFriday[index].innerText !== "Sexta-Feira"
      ? (liFriday[index].innerText = "Sexta-Feira")
      : (liFriday[index].innerText = sextas[index]);
  }
}
document.getElementById("btn-friday").addEventListener("click", mufasa);

const li = document.getElementById("days");
function aumentaFonte(event) {
  event.target.style.fontSize = "1.5em";
}

li.addEventListener("mouseover", aumentaFonte);

function retornaFonteNormal(event) {
  event.target.style.fontSize = "20px";
}
li.addEventListener("mouseout", retornaFonteNormal);

function adicionaTarefa(params) {
  const objTask = document.createElement("span");
  objTask.innerText = params;
  document.querySelector(".my-tasks").appendChild(objTask);
}

function adicionaLegendaColorida(cor) {
  const divColorida = document.createElement("div");
  divColorida.style.backgroundColor = cor;
  divColorida.classList.add("task");
  document.querySelector(".my-tasks").appendChild(divColorida);
}

adicionaTarefa("Fazer os projetos!");
adicionaLegendaColorida("green");

function adicionaClassTaskSelected() {
  const taskColorida = document.querySelectorAll(".task");
  for (const iterator of taskColorida) {
    if (iterator.getAttribute("class") == "task") {
      iterator.classList.add("selected");
    } else if (iterator.getAttribute("class") == "task selected")
      iterator.classList.remove("selected");
  }
}

document
  .querySelector(".my-tasks")
  .addEventListener("click", adicionaClassTaskSelected);

function addContent(params) {
  const input = document.getElementById("task-input");
  if (input.value.trim() === "" || input.value === null) {
    alert("Digite algum compromisso");
  } else {
    let item = document.createElement("li");
    item.innerText = input.value;
      item.style.textTransform = "lowercase";
    document.querySelector(".task-list").appendChild(item);
  }
}
document.getElementById("btn-add").addEventListener("click", addContent);

function btnlimpar() {
  let btnLimpar = document.createElement('button');
  btnLimpar.innerText = "Limpar";
  btnLimpar.setAttribute('id', 'btn-limpar');

  document.querySelector('.input-container').appendChild(btnLimpar);
}
btnlimpar();

