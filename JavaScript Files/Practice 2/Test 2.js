let age = 11

function det(){
    if (age < 6){
        return "Free"
    } else if (age < 17 && age > 6){
        return "Child Discount"
    } else if (age > 18 && age < 26){
        return "Student Discount"
    } else if (age >27 && age < 66){
        return "Full Price"
    } else {
        return "Senior Citizen Discount"
}
}

console.log(det())