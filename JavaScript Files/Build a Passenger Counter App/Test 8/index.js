let count = 0

let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}
increment()

function save(){
    console.log(count)
    count=0
    countEl.innerText=count

}

save()