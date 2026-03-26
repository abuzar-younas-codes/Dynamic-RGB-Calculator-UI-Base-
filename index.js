let display = document.querySelector("#display");

function pressNumber(num) {
    display.value += num;
}

function pressOperator(op) {
    display.value += op;
}

function clearScreen() {
    display.value = "";
}

function solve() {
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value = "Error";
    }
}


function changeBg() {
    let container = document.querySelector(".buttons");
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    container.style.backgroundColor = randomColor;
}