// Guardar las credenciales en localStorage
localStorage.setItem("Usuario", "JuiceWRLD999");
localStorage.setItem("Password", "jaredguineo02");

function login() {
    // Obtener los valores ingresados por el usuario
    const emailInput = document.getElementById("typeEmailX-2").value;
    const passwordInput = document.getElementById("typePasswordX-2").value;

    // Obtener los valores almacenados en localStorage
    const storedUser = localStorage.getItem("Usuario");
    const storedPassword = localStorage.getItem("Password");

    // Verificar si los datos ingresados coinciden con los almacenados
    if (emailInput === storedUser && passwordInput === storedPassword) {
        // Mostrar el mensaje de acceso exitoso
        document.getElementById("accessMessage").style.display = "block";
    } else {
        // Mostrar un mensaje de error en caso de credenciales incorrectas
        alert("Usuario o contraseña incorrectos.");
    }
}
