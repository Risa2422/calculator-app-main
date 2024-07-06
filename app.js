const buttons = document.querySelectorAll(".keys button");
const inputNum = document.querySelector(".result");

const numButtons = document.querySelectorAll(".number");
const addButton = document.querySelector(".add");
const subButton = document.querySelector(".sub");
const divButton = document.querySelector(".div");
const mulButton = document.querySelector(".mul");

const equal = document.querySelector(".equal");
const del = document.querySelector(".del");
const resetButton = document.querySelector(".reset");

let numberInput = [];
let result = undefined;
let lastOperator = "";

inputNum.textContent = "0";

numButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.textContent;
    if (numberInput.includes(".") && value === ".") {
      return false;
    }

    numberInput.push(value);
    inputNum.textContent = numberInput.join("").toString();
  });
});

addButton.addEventListener("click", () => {
  if (lastOperator !== "equal") {
    if (result === undefined) {
      result = Number(inputNum.textContent);
    } else {
      result += Number(inputNum.textContent);
    }
  }

  inputNum.textContent = result;
  numberInput = [];
  lastOperator = "add";
  console.log(result);
});

subButton.addEventListener("click", () => {
  if (lastOperator !== "equal") {
    if (result === undefined) {
      result = Number(inputNum.textContent);
    } else {
      result -= Number(inputNum.textContent);
    }
  }

  inputNum.textContent = result;
  numberInput = [];
  lastOperator = "sub";
  console.log(result);
});

divButton.addEventListener("click", () => {
  if (lastOperator !== "equal") {
    if (result === undefined) {
      result = Number(inputNum.textContent);
    } else {
      result /= Number(inputNum.textContent);
    }
  }

  inputNum.textContent = result;
  numberInput = [];
  lastOperator = "div";
  console.log(result);
});

mulButton.addEventListener("click", () => {
  if (lastOperator !== "equal") {
    if (result === undefined) {
      result = Number(inputNum.textContent);
    } else {
      result *= Number(inputNum.textContent);
    }
  }

  inputNum.textContent = result;
  numberInput = [];
  lastOperator = "mul";
  console.log(result);
});

equal.addEventListener("click", () => {
  if (lastOperator === "add") {
    result += Number(inputNum.textContent);
  } else if (lastOperator === "sub") {
    result -= Number(inputNum.textContent);
  } else if (lastOperator === "div") {
    result /= Number(inputNum.textContent);
  } else if (lastOperator === "mul") {
    result *= Number(inputNum.textContent);
  }
  inputNum.textContent = result;
  numberInput = [];
  lastOperator = "equal";
  console.log(result);
});

del.addEventListener("click", () => {
  numberInput.pop();
  inputNum.textContent = numberInput.join("").toString();
});

resetButton.addEventListener("click", () => {
  numberInput = [];
  result = undefined;
  inputNum.textContent = "0";
});
