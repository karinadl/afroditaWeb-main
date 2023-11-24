//Luz Elizabeth Velázquez Tovar
//19 de octubre de 2023
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username === "Oliver-Romo" && password === "1a2b3C") || (username === "Daniel-Folio" && password === "7#23A")) {
        window.location.href = "C:/Users/karin/OneDrive/Documentos/PROGRAMACIÓN WEB/PROYECTO FINAL/index.html"; // Redirige a la página de dashboard si las credenciales son correctas
    } else {
        document.getElementById("error-message").textContent = "Credenciales incorrectas. Por favor, intenta de nuevo.";
    }
});

document.getElementById("registro").addEventListener("click", function() {
    // Redirigir a la página de registro
    window.location.href = "registro.html";
  });
  

function showAlert() {
    alert("Comunicate con el administrador.");
}