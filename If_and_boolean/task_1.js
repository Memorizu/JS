
let userName = "John"
let userBalance = 5001


if (userName === "admin") {
    console.log("Администратор")
} else if (!userName) {
    console.log("Гость")
} else {
    if (userBalance > 1000 && userBalance <= 5000) {
        console.log("Постоянный покупатель")
    } else if (userBalance > 5000) {
        console.log("Вип-клиент")
    }
}