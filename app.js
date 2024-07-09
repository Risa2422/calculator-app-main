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

const themeButtons = document.querySelectorAll(
  ".theme-button input[type='radio']"
);
const body = document.querySelector("body");

let numberInput = [];
let result = undefined;
let lastOperator = "";

inputNum.textContent = "0";

numButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.add("pressed");

    const value = this.textContent;
    if (numberInput.includes(".") && value === ".") {
      return false;
    }

    numberInput.push(value);
    inputNum.textContent = numberInput.join("").toString();

    setTimeout(() => {
      button.classList.remove("pressed");
    }, 500); 
  });
});

addButton.addEventListener("click", () => {
  addButton.classList.add("pressed");
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

  setTimeout(() => {
    addButton.classList.remove("pressed");
  }, 500);
});

subButton.addEventListener("click", () => {
  subButton.classList.add("pressed");
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

  setTimeout(() => {
    subButton.classList.remove("pressed");
  }, 500);
});

divButton.addEventListener("click", () => {
  divButton.classList.add("pressed");
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

  setTimeout(() => {
    divButton.classList.remove("pressed");
  }, 500);
});

mulButton.addEventListener("click", () => {
  mulButton.classList.add("pressed");
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

  setTimeout(() => {
    mulButton.classList.remove("pressed");
  }, 500);
});

equal.addEventListener("click", () => {
  equal.classList.add("pressed");
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
  setTimeout(() => {
    equal.classList.remove("pressed");
  }, 500);
});

del.addEventListener("click", () => {
  del.classList.add("pressed");
  numberInput.pop();
  inputNum.textContent = numberInput.join("").toString();
  setTimeout(() => {
    del.classList.remove("pressed");
  }, 500);
});

resetButton.addEventListener("click", () => {
  resetButton.classList.add("pressed");
  numberInput = [];
  result = undefined;
  inputNum.textContent = "0";
  setTimeout(() => {
    resetButton.classList.remove("pressed");
  }, 500);
});

themeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.classList.remove("theme-basic");
    body.classList.remove("theme-light");
    body.classList.remove("theme-dark");

    body.classList.add(e.target.value);
  });
});
