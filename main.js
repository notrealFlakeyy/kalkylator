function updateAnswer(input) {
    document.querySelector("#answer").innerText += input;
}

function clearAnswer(input) {
    document.querySelector("#answer").innerText = "";
}

function addition(input) {
    document.querySelector("#answer").innerText += '+';
}

function giveAnswer() {
    eval(document.querySelector("#answer").innerText)
}

function giveAnswer() {
    document.querySelector("#answer").innerText
    const giveAnswer = document.querySelector("#answer").innerText
    const result = eval(giveAnswer)

    document.querySelector("#answer").innerText = result;
}
function multiplication() {
    document.querySelector("#answer").innerText += '*';
}

function division() {
    document.querySelector("#answer").innerText += '/';
}

function subtraction() {
    document.querySelector("#answer").innerText += '-';
}

function percent() {
    document.querySelector("#answer").innerText += '%'
}

giveAnswer()
