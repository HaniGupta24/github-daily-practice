function add() {
    calculate("+");
}

function subtract() {
    calculate("-");
}

function multiply() {
    calculate("*");
}

function divide() {
    calculate("/");
}

function calculate(operator) {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result;

    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "*") result = a * b;
    if (operator === "/") {
        if (b === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero";
            return;
        }
        result = a / b;
    }

    document.getElementById("result").innerText = "Result: " + result;
}
