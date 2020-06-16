$('.carousel').carousel({
    interval: 5000
});

function clickHandler(id) {
  var classList = ['.c1', '.c2', '.c3', '.c4'];
  var btList = ['.b1', '.b2', '.b3', '.b4'];
  element = $(classList[id]);
  chosenButton = $(btList[id]);
  changeColors(element);
  updateButton(chosenButton);
}

function changeColors(element) {
  if (element.hasClass('not-learned')) {
    element.removeClass('not-learned');
    element.addClass('learned');
  } else if (element.hasClass('learned')) {
    element.removeClass('learned');
    element.addClass('not-learned');
  }
}

function updateButton(chosenButton) {
  if (chosenButton.text() == 'No Aprendido') {
    chosenButton.text('Aprendido');
  } else {
    chosenButton.text('No Aprendido')
  }
}

$('#btSend').click(function() {
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
  } else {
    event.preventDefault();
  }
});

