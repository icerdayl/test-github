const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages(pics) {
    for (let i = 0; i < imgs.length; i++) {
        container.innerHTML += `<img class="team-img" src="${pics[i]}">`
    }
}

renderImages(imgs)