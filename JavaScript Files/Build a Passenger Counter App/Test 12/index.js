let count = 0

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
    count = count + 1
    countEl.textContent = count
    console.log(count)
}
increment()

function save(){
    console.log(count)
    let entryLog = count + " - "
    saveEl.textContent += entryLog 
    count = 0
    countEl.textContent = count
}

save()