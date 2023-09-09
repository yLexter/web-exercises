
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", handleClick)
})

function handleClick(e) {

    const expression = document.getElementById("expression")
    const content = expression.textContent
    const value = this.dataset.data

    const specialsOperations = {
        "x": () => expression.textContent = content.slice(0, -1),
        "c": () => expression.textContent = "0",
        "=": () => expression.textContent = eval(content) || "Invalid Operation"
    }

    if (content.length == 1 && ["c", "x", "="].includes(value))
        return expression.textContent = "0";

    if (content.length == 1 && content == "0")
        return expression.textContent = value;

    const specialsOperation = specialsOperations[value]

    if (specialsOperation) {
        specialsOperation()
    } else {
        expression.textContent += value
    }

}