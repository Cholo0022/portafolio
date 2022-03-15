let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", function () {
  let inputNombre = document.querySelector("#nombre");
  let inputEmail = document.querySelector("#email");
  let expresion =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  let inputAsunto = document.querySelector("#asunto");
  let inputMensaje = document.querySelector("#mensaje");
  console.log(inputNombre.value.length);
  if (inputNombre.value === "") {
    let errorNombre = document.querySelector(".errorNombre");
    errorNombre.textContent = "Campo obligatorio";
    errorNombre.style.color = "red";
    document.querySelector("#nombre").focus();
  }

  if (inputNombre.value.length > 50) {
    let errorNombre = document.querySelector(".errorNombre");
    errorNombre.textContent = "Solo se permite hasta 50 caracteres";
    errorNombre.style.color = "red";
    document.querySelector("#nombre").value = "";
    document.querySelector("#nombre").focus();
  }

  if (inputEmail.value === "") {
    let errorEmail = document.querySelector(".errorEmail");
    errorEmail.textContent = "Campo obligatorio";
    errorEmail.style.color = "red";
    document.querySelector("#email").value = "";
    document.querySelector("#email").focus();
  } else {
    if (!expresion.exec(inputEmail.value)) {
      let errorEmail = document.querySelector(".errorEmail");
      errorEmail.textContent = "Email incorrecto";
      errorEmail.style.color = "red";
      document.querySelector("#email").value = "";
      document.querySelector("#email").focus();
    }
  }
  if (inputAsunto.value === "") {
    let errorAsunto = document.querySelector(".errorAsunto");
    errorAsunto.textContent = "Campo obligatorio";
    errorAsunto.style.color = "red";
    document.querySelector("#asunto").value = "";
    document.querySelector("#asunto").focus();
  }

  if (inputMensaje.value === "") {
    let errorMensaje = document.querySelector(".errorMensaje");
    errorMensaje.textContent = "Campo obligatorio";
    errorMensaje.style.color = "red";
    document.querySelector("#mensaje").focus();
  }

  if (inputMensaje.value.length > 300) {
    let errorMensaje = document.querySelector(".errorMensaje");
    errorMensaje.textContent = "Solo se permite hasta 300 caracteres";
    errorMensaje.style.color = "red";
    document.querySelector("#mensaje").value = "";
    document.querySelector("#mensaje").focus();
  }
});
