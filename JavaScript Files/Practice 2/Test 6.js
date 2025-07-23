let hands = ["rock", "paper", "scissor"]

function getHand() {
    let rand = Math.floor( Math.random() * 3)
    return hands[rand]
}

console.log( getHand() )