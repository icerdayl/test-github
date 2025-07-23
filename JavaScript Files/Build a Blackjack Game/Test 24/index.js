let player={
    name: "Ahiezer",
    chips: 143
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document. getElementById("player-el")

playerEl.textContent = player.name +": $"+ player.chips

function getRandomCard(){
     let rand = Math.floor( Math.random()*13 ) + 1
    if (rand > 10) {
        return 10
    } else if (rand === 1) {
        return 11
    } else {
        return rand
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}
function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
     cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        message = "Drawing a new card from the deck!"
        messageEl.textContent = message
        renderGame()  
    }
}