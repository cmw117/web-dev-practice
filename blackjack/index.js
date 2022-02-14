
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let player = { 
    name: "Cassie",
    chips: 0
}


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+ ": $" + player.chips
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    let isAlive = true
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) +1
    if (randomNumber === 1) {
        randomNumber = 11
    } else if (randomNumber >= 11) {
        randomNumber = 10
    } else {
        randomNumber = randomNumber
    }
    return randomNumber
    
}


function renderGame() {
    cardsEl.textContent = "CARDS: " 
    for (let i =0; i< cards.length; i++) {
        cardsEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "SUM: " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        player.chips += 100
        message = "You've got BLACKJACK! Click Start Game to begin another round"
        playerEl.textContent = player.name+ ": $" + player.chips
        hasBlackJack = true
    } else  {
        player.chips -= 50
        message = "You lose."
        playerEl.textContent = player.name+ ": $" + player.chips
        isAlive = false
    }
    messageEl.innerText = message
   
    //cardsEl.textContent = "CARDS: " + cards[0] + " and " + cards[1] 
    console.log(message)
}

function newCard() {
    if (isAlive) {
    let nextCard = getRandomCard()
    console.log("is this a new card error")
    cards.push(nextCard)
    sum += nextCard
    console.log(sum)
    renderGame()
    } else  {
        sum = 0
        player.chips -= 50
        message = "You lose...your card,  " + cards[(cards.length-1)] + " put you over. Click start game to begin another game"
        playerEl.textContent = player.name+ ": $" + player.chips
    messageEl.innerText = message
    console.log(cards)
    
    cardsEl.textContent = "CARDS: " 
    for (let i =0; i< cards.length; i++) {
        cardsEl.textContent += cards[i] + "  "
    }
    for ( let j = cards.length; j >= 0; j--) {
    cards.pop() 
}
    
}
}
