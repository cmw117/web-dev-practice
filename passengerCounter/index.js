let countEl = document.getElementById("count-el")
let count = 0
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let username = "Cassie"
let message = "You have notifications"
let saveMessage = "Previous passenger counts: " + count
let welcomeMessage = "Welcome back, "
welcomeEl.innerText = welcomeMessage + username + " 👋"


function increment() {
    count +=1
    countEl.innerText = count
}

function save() {
    console.log(count)
    console.log('Wow ' + count + ' people were at the train station for the next trip out. \n Resetting the counter for the next group of passengers.')
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

let messageToUser = username +" " + message
console.log(messageToUser)

let greeting = "Hi, my name is "
let myGreeting = greeting + username
console.log(myGreeting)
