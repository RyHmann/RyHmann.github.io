var i = 0;
var typewriterText = `Hello there, I'm Ryan\nI'm an electrical engineer\nI used to design sports stadiums\nI want to design software`;
var speed = 150;

function typeWriter() {
    if (i < typewriterText.length) {
        let text=typewriterText.charAt(i);
        document.getElementById("journey-text").innerHTML += text === "\n" ? "<br>": text;
        i++;
        setTimeout(typeWriter, speed);
    }
}

function generateMemoryText() {
    let memInt = Math.floor(Math.random() * 64) + 32;
    var memText = `${memInt}K Avail.`
    document.getElementById("memory").innerHTML ===  memText;
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM fully loaded.');
    typeWriter();
    generateMemoryText();
});