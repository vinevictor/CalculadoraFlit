let btn = document.querySelectorAll(".item");
let btnE = document.querySelectorAll(".itemE");

let igual = document.querySelector(".igual");
let ponto = document.querySelector(".ponto");

let display = document.querySelector(".item1");
let resultado = 0;
let operacao = "";
let num1 = null;
let num2 = null;
let pontoClicado = false;
let validador = true;

btn.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (display.textContent === "0" || resultado) {
      display.textContent = "";
    }
    display.textContent += botao.getAttribute("value");
  });
});

// btn.forEach((botao) => {
//   botao.addEventListener("click", () => {
//     if (display.textContent === "0" || resultado) {
//       display.textContent = "";
//       resultado = null;
//     }
//     display.textContent += botao.getAttribute("value");
//   });
// });

btnE.forEach((botaoE) => {
  botaoE.addEventListener("click", () => {
    switch (botaoE.getAttribute("value")) {
      case "+":
        num1 = parseFloat(display.textContent);
        display.textContent = "";
        pontoClicado = false;
        if (operacao && display.textContent !== "") {
          num2 = parseFloat(display.textContent);
        }
        operacao = botaoE.getAttribute("value");
        break;
      case "-":
        num1 = parseFloat(display.textContent);
        display.textContent = "";
        pontoClicado = false;
        if (operacao && display.textContent !== "") {
          num2 = parseFloat(display.textContent);
        }
        operacao = botaoE.getAttribute("value");
        break;
      case "*":
        num1 = parseFloat(display.textContent);
        display.textContent = "";
        pontoClicado = false;
        if (operacao && display.textContent !== "") {
          num2 = parseFloat(display.textContent);
        }
        operacao = botaoE.getAttribute("value");
        break;
      case "/":
        num1 = parseFloat(display.textContent);
        display.textContent = "";
        pontoClicado = false;
        if (operacao && display.textContent !== "") {
          num2 = parseFloat(display.textContent);
        }
        operacao = botaoE.getAttribute("value");
        break;
      case ".":
        if (!pontoClicado) {
          display.textContent += ".";
          pontoClicado = true;
        }
        break;
      default:
        break;
    }
  });
});

igual.addEventListener("click", () => {
  num2 = parseFloat(display.textContent);
  if (operacao && display.textContent !== "") {
    switch (operacao) {
      case "+":
        resultado = somar(num1, num2);
        break;
      case "-":
        resultado = subtrair(num1, num2);
        break;
      case "/":
        resultado = dividir(num1, num2);
        break;
      case "*":
        resultado = multiplicar(num1, num2);
        break;
    }
    display.textContent = resultado;
    operacao = "";
    num1 = null;
    num2 = null;
    pontoClicado = false;
    resultado = 0;
  }
});

function somar(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}
