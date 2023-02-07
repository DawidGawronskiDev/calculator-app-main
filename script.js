let output = document.querySelector(".output");
const BTN = document.querySelectorAll(".btn");

let firstDigit;
let secondDigit;
let currentDigit;
let operator;
let dotBoolean = false;

function startSetup() {
  firstDigit = "0";
  secondDigit = "";
  currentDigit = "";
  operator = "";
}
startSetup();

BTN.forEach((btn) => {
  //takes input from button
  btn.addEventListener("click", function () {
    //checks type of button (for example operator)
    switch (btn.classList[1]) {
      //adds digit to first or second number
      case "digBtn":
        addInput(btn);
        break;
      //changes operator
      case "opeBtn":
        addOperator(btn);
        break;
      //adds dot if there is no dot
      case "dotBtn":
        addDot(btn);
        break;
      //deletes last character from equation
      case "delBtn":
        deleteLast();
        break;
      //shows result of equetion
      case "equBtn":
        showResult();
        break;
      case "resBtn":
        startSetup();
        break;
    }
    showDisplay();
  });
});

function addInput(btn) {
  if (operator == "") {
    firstDigit == "0" ? (firstDigit = "") : 0;
    firstDigit += btn.textContent;
  } else {
    secondDigit == "0" ? (secondDigit = "") : 0;
    secondDigit += btn.textContent;
  }
}

function addOperator(btn) {
  operator = btn.textContent;
}

function addDot(btn) {
  const dotReg = RegExp("[.]", "ig");
  if (!operator) {
    if (dotReg.test(String(firstDigit)) == false) {
      firstDigit += btn.textContent;
    }
  } else {
    if (dotReg.test(String(secondDigit)) == false) {
      secondDigit += btn.textContent;
    }
  }
}

function deleteLast() {
  //deletes last character from secondDigit
  if (firstDigit && operator && secondDigit) {
    newStr = secondDigit;
    secondDigit = "";
    for (let i = 0; i < newStr.length - 1; i++) {
      secondDigit += newStr[i];
    }
    secondDigit == "" ? (secondDigit = "0") : 0;
  }

  //delets operator
  else if (firstDigit && operator && secondDigit == "") {
    operator = "";
  }

  //delets last character from firstDigit
  else if (firstDigit && operator == "" && secondDigit == "") {
    newStr = firstDigit;
    firstDigit = "";
    for (let i = 0; i < newStr.length - 1; i++) {
      firstDigit += newStr[i];
    }
    firstDigit == "" ? (firstDigit = "0") : 0;
  }
}

function showDisplay() {
  if (firstDigit && operator == "" && secondDigit == "") {
    output.textContent = firstDigit;
  } else if (firstDigit && operator && !secondDigit) {
    output.textContent = `${firstDigit} ${operator}`;
  } else if (firstDigit && operator && secondDigit) {
    output.textContent = secondDigit;
  }
}

function showResult() {
  if (firstDigit == "") {
    firstDigit = Number(0);
  } else {
    firstDigit = Number(firstDigit);
  }
  if (secondDigit == "") {
    secondDigit = Number(0);
  } else {
    secondDigit = Number(secondDigit);
  }
  let result = 0;

  if (operator) {
    switch (operator) {
      case "+":
        result = firstDigit + secondDigit;
        break;
      case "-":
        result = firstDigit - secondDigit;
        break;
      case "/":
        result = firstDigit / secondDigit;
        break;
      case "x":
        result = firstDigit * secondDigit;
        break;
    }
    if (isNaN(result) || result == "Infinity") {
      result = "0";
    }
    startSetup();

    firstDigit = result;
  }
}
