document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formularioRegistro");
    const info = document.getElementById("infoEnviada");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombreUsuario").value;
        const apellido = document.getElementById("apellidoUsuario").value;
        const birthdate = document.getElementById("fechaUsuario").value;

        const usuario = {
            nombre: nombre,
            apellido: apellido,
            birthdate: birthdate,
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then((response) => response.json())
            .then((data) => {
                info.innerHTML = "Registro exitoso: " + JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                info.innerHTML = "No se pudo registrar";
            })
    });
});