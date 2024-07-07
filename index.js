console.log("Hello");

document.write("Some Text added by Javascript")

const embeddedDiv = document.getElementById("embedded_div")

console.log(embeddedDiv)

embeddedDiv.append(" Hello World")

let count = 0

const button = document.getElementById("click_me_button")
const counterSpan = document.getElementById("counter")

button.addEventListener("click", () => {
    count ++
    counterSpan.innerText = count
})