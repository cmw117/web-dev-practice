let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")
let historyEl = document.getElementById("history-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    sumEl.textContent = num1 + num2
    historyEl.textContent += "|| ----- ADDING: 8 + 2 = 10  -----|| \n"
}

function subtract() {
    sumEl.textContent = num1 - num2
    historyEl.textContent += "|| - SUBTRACTING: 8 - 2 = 6 - || \n"

}

function multiply() {
    sumEl.textContent = num1 * num2
    historyEl.textContent += "|| - MULTIPLYING: 8 * 2 = 16 - || \n"
}

function divide() {
    sumEl.textContent = num1/num2
    historyEl.textContent += "||  -----   DIVIDING: 8 / 2 = 4  ----- ||    \n"

}