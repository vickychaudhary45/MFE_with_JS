import faker from "faker"

const cartText = `<div> you have ${faker.random.number()} items in your cart <div>`

document.querySelector("#div-cart").innerHTML = cartText;