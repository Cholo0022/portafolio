let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", function () {
    let inputNombre = document.getElementById("nombre");
    let inputEmail = document.getElementById("emails");
    let inputAsunto = document.getElementById("asunto");
    let inputMensaje = document.getElementById("mensaje");
    console.log(inputNombre.value.length)
    if (inputNombre.value === "") {
        let mensajeError = document.getElementById("mensajeError")
        mensajeError.textContent = "Campo obligatorio";
        mensajeError.style.color = "red"
        document.getElementById("nombre").focus();
    }

    if (inputNombre.value.length > 50) {
        mensajeError.textContent = "Solo se permite hasta 50 caracteres";
        mensajeError.style.color = "red"
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();
    }
    

})
