$(document).ready(function(){
    $('.sidenav').sidenav();
});

function handleBt() {
    var name = $('#name').val();
    var email = $('#email').val();
    var confBool;

    if (name == "" || email == "") {
        alert("Llena los campos faltantes e intenta de nuevo.");
    } else {
        confBool = confirm("Hemos recolectado que tu nombre es " + name + " y tu correo es " + email + ". Es correcto?");
    }

    if (confBool) {
        window.location.reload();
        alert("Datos enviados exitosamente! Te contactaremos pronto.");
    }
}