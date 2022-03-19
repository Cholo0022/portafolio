//Valida campo Nombre
let nombre = document.querySelector("#nombre");
let errorNombre = document.querySelector(".errorNombre");

nombre.addEventListener(
  "blur",
  function (event) {
    let nombre = event.target.value;
    event.target.style.background = "";
    if (nombre === "") {
      errorNombre.textContent = "Campo obligatorio";
      errorNombre.style.color = "red";
    }
    if (nombre.length > 50) {
      errorNombre.textContent = "Solo se permite hasta 50 caracteres";
      errorNombre.style.color = "red";
    }
  },
  true
);

//Cuando el foco está en el campo nombre, se pinta rosado y se borra el mensaje de error
nombre.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
    errorNombre.textContent = "";
  },
  true
);

//Valida campo Email
let email = document.querySelector("#email");
let expresion =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
let errorEmail = document.querySelector(".errorEmail");

email.addEventListener(
  "blur",
  function (event) {
    let email = event.target.value;
    event.target.style.background = "";
    if (email === "") {
      errorEmail.textContent = "Campo obligatorio";
      errorEmail.style.color = "red";
    } else {
      if (!expresion.exec(email)) {
        errorEmail.textContent = "Email incorrecto";
        errorEmail.style.color = "red";
      }
    }
  },
  true
);

//Cuando el foco está en el campo email, se pinta rosado y se borra el mensaje de error
email.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
    errorEmail.textContent = "";
  },
  true
);

//Valida campo Asunto
let asunto = document.querySelector("#asunto");
let errorAsunto = document.querySelector(".errorAsunto");

asunto.addEventListener(
  "blur",
  function (event) {
    let asunto = event.target.value;
    event.target.style.background = "";
    if (asunto === "") {
      errorAsunto.textContent = "Campo obligatorio";
      errorAsunto.style.color = "red";
    }
  },
  true
);

//Cuando el foco está en el campo asunto, se pinta rosado y se borra el mensaje de error
asunto.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
    errorAsunto.textContent = "";
  },
  true
);

//Valida campo Mensaje
let mensaje = document.querySelector("#mensaje");
let errorMensaje = document.querySelector(".errorMensaje");

mensaje.addEventListener(
  "blur",
  function (event) {
    let mensaje = event.target.value;
    event.target.style.background = "";
    if (mensaje === "") {
      errorMensaje.textContent = "Campo obligatorio";
      errorMensaje.style.color = "red";
    }
    if (mensaje.length > 300) {
      errorMensaje.textContent = "Solo se permite hasta 300 caracteres";
      errorMensaje.style.color = "red";
    }
  },
  true
);

//Cuando el foco está en el campo mensaje, se pinta rosado y se borra el mensaje de error
mensaje.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
    errorMensaje.textContent = "";
  },
  true
);

function habilitarBoton() {
  inputNombre = document.getElementById("nombre").value;
  inputEmail = document.getElementById("email").value;
  inputAsunto = document.getElementById("asunto").value;
  inputMensaje = document.getElementById("mensaje").value;
  let valor = 0;
  if (inputNombre.length > 0) {
    valor++;
  }
  if (inputEmail.length > 0) {
    valor++;
  }
  if (inputAsunto.length > 0) {
    valor++;
  }
  if (inputMensaje.length > 0) {
    valor++;
  }
  console.log(valor);
  if (valor >= 4) {
    document.getElementById("botonEnviar").disabled = false;
    document.getElementById("botonEnviar").style.color = "#FFFFFF";
  } else {
    document.getElementById("botonEnviar").disabled = true;
  }
}

document.getElementById("nombre").addEventListener("keyup", habilitarBoton);
document.getElementById("email").addEventListener("keyup", habilitarBoton);
document.getElementById("asunto").addEventListener("keyup", habilitarBoton);
document.getElementById("mensaje").addEventListener("keyup", habilitarBoton);
document.getElementById("botonEnviar").addEventListener("click", () => {
  alert("Formulario completo");
});
