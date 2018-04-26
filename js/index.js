alert("Hola, Bienvenido a trivia laboratoria");
var userName = prompt("cual es tu nombre?");
if (userName){
    document.getElementById("name").textContent = "Bienvenida a la trivia " + userName;
    document.getElementById("buttonQuestion").classList.remove("hide");
} else {
    window.location.href = "index.html";
}

function goToQuestion() {
    window.location.href = "questions.html";
}