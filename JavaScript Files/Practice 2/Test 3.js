let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

function loop(){
    let country = ""
    for (let i = 0; i < largeCountries.length; i++){
        country += largeCountries[i] + " "
    }  
    return country
}
console.log("The 5 largest countries in the world: " + loop())