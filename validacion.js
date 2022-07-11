//Haz tú validación en javascript acá

//formulario
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input");


//limpiar Formulario
function limpiarErrores() {
  //guardo en var errores todos los elementos de clase error
  var errores = document.getElementsByClassName("error");
  //limpiamos
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

//validacion formulario
function validar(formulario) {
  //llamamos a la funcion a limpiar
  limpiarErrores();

  //validacion nombre
  if (formulario.nombre.value.length == 0) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    formulario.nombre.focus();
    limpiarErrorAutomatico()
    return false;
  }

  //validacion email
  if (formulario.email.value.length == 0) {
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    formulario.email.focus();
    limpiarErrorAutomatico()
    return false;
  }

  //expresion regular para validar un email
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Email Invalido";
    formulario.email.focus();
    limpiarErrorAutomatico()
    return false;
  }

  //validacion asunto
  if (formulario.asunto.value.length == 0) {
    document.getElementById("errorAsunto").innerText = "Campo obligatorio";
    formulario.asunto.focus();
    limpiarErrorAutomatico()
    return false;
  }

  //validacion mensaje
  if (formulario.mensaje.value.length == 0) {
    document.getElementById("errorMensaje").innerText = "Campo obligatorio";
    formulario.mensaje.focus();
    limpiarErrorAutomatico()
    return false;
  }

  if (formulario.mensaje.value.trim().length > 300) {
    document.getElementById("errorMensaje").innerText =
      "El mensaje puede tener max.300 caracteres";
    formulario.mensaje.focus();
    limpiarErrorAutomatico()
    return false;
  }

  alert("Registro Exitoso");

  return true;
}

//se ejecute el limpiar error de forma automatica
let automatico;

function limpiarErrorAutomatico() {

  automatico = setTimeout(limpiarErrores, 3000);
}