
let username = "John"

let statuses = {
    "regular": 10, 
    "extended": 15, 
    "premium": 20, 
    "vip": 30
}

let statusNames = Object.keys(statuses)
let accountStatus = statusNames[Math.floor(Math.random() * statusNames.length)]


console.log(
    `${username} | (${accountStatus}) аккаунт\nВы получаете ${statuses[accountStatus]}% с покупок на бонусный счет.`
)
