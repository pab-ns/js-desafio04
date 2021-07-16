let form = document.getElementById("formulario");
form.addEventListener("submit", function(event){
    event.preventDefault();
    cleanError();

    let nombreInput = document.querySelector("#nombre").value
    let asuntoInput = document.querySelector("#asunto").value
    let mensajeInput = document.querySelector("#mensaje").value

    let result = formValidate(nombreInput, asuntoInput, mensajeInput)

    if (result == true){
        formSuccess()
    }
})

// funcion clearError
let cleanError = () => {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

// funcion formSuccess
let formSuccess = () => {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!"
}

// funcion validar
let formValidate = (nombre, asunto, mensaje) => {
    let passValidate = true;
    
    // validar nombre
    let nombreValidate = /[a-zA-Z]/gim;

    if (nombreValidate.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML ="El nombre es requerido";
        passValidate = false;
    }


    // validar asunto
    let asuntoValidate = /[a-zA-Z]/gim;

    if (asuntoValidate.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML ="El asunto es requerido";
        passValidate = false;
    }    


    // validar msj
    let msjValidate = /[a-zA-Z]/gim;

    if (msjValidate.test(mensaje) == false){
        document.querySelector(".errorMensaje").innerHTML ="El mensaje es requerido";
        passValidate = false;
    } 

    return passValidate;

}
