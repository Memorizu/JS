
let bonusBalance = 5000
let purchaseCountInMonth = 2

let defaultAccrualRate = 10
let increasedAccrualRate = 20
let frequentPuchaseBonus = 5

let productPrice = 3000
let totalBonusPersantage = 0

console.log(`Баланс на текущий момент: ${bonusBalance}`)
console.log(`Стоимость покупки ${productPrice}`)

if (purchaseCountInMonth >= 2) {
    totalBonusPersantage += frequentPuchaseBonus
    console.log(`увеличенный коэфициент за частые покупки: +${frequentPuchaseBonus}%`)
}

if (bonusBalance >= 5000) {
    totalBonusPersantage += increasedAccrualRate
    console.log(`Увеличенный коэфициент за большой бонусный баланс: +${increasedAccrualRate}%`)
} else {
    totalBonusPersantage += defaultAccrualRate
    console.log(`Стандартный коэфициент бонусных баллов: +${defaultAccrualRate}%`)
}

bonusBalance += (productPrice * totalBonusPersantage) / 100

console.log(`Процент зачисления баллов за покупку: ${totalBonusPersantage}%`)
console.log(`Общий баланс Бонусов: ${bonusBalance}`)
