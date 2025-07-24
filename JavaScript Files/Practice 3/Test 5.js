function generateSentence(desc, arr) {
    let msg = `The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {
        msg += arr[i] + ","
    }
    return msg
}

const sentence = generateSentence("largest countries", ["China", "India", "USA"])
console.log(sentence)