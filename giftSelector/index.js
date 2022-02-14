document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
let errorEl = document.getElementById("error-el")
let foodEl = document.getElementById("food-select")
let transporationEl = document.getElementById("transport-select")


function calculate() {
    let value1 = foodEl.options[foodEl.selectedIndex].value;
let value2 = transporationEl.options[transporationEl.selectedIndex].value;

    if (value1 && value2) {
    let totalCost = parseInt(value1) + parseInt(value2)
    costEl.innerText = totalCost
} else {
    let errorMessage = "Make sure you have selected a food AND transportation option"
    errorEl.innerText = errorMessage
}
}
function clearValue() {
    value1 = 0
    value2 = 0
    costEl.innerText = ".."
    errorEl.innerText = null
    XMLHttpRequestUpload()
}