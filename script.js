let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value[display.value.length - 1];
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function appendDot() {
    let currentValue = display.value.split(/[\+\-\*\/]/).pop();
    if (!currentValue.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}



