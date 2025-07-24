let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]
let log = document.getElementById("btn")

log.addEventListener("click", function (){
    console.log(data[0])
})
