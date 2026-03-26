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
