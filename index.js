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

// Ye naya function aakhri character ko remove karta hai
function backspace() {
    display.value = display.value.slice(0, -1);
}

function solve() {
    try {
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (err) {
        display.value = "Error";
    }
}

function changeBg() {
    let container = document.querySelector(".buttons");
    let randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`; 
    container.style.backgroundColor = randomColor;
}
