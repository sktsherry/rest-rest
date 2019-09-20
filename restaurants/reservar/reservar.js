var info = new Map();
info.set("letoile", ["letoile.jpg", "L'Etoile Restaurante", "$$$$", "4.5", "413"])

function handleSchedulePage(){
    console.log(window.location.search.substr(1));
    param = window.location.search.substr(1)
    restaurant = info.get(param)
    console.log(restaurant);
    $("#rest_title").html(restaurant[1]);
}

$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      cpf:{
        required: true,
        digits: true,
        maxlength: 11,
        minlength: 11
      },
      telefone: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        digits: true,
        maxlength: 11,
      },
      time: {
        required: true,
      },
      numberOfPeople: {
        required :true,
      },
      date :{
        required : true,
        date: true,
      },
    },
    // Specify validation error messages
    messages: {
      firstname: "Por favor insira seu nome.",
      cpf: {
        required: "Por favor insira seu CPF.",
        digits: "CPF deve conter apenas digitos.",
        maxlength: "CPF não deve conter mais de 11 números."
      },
      telefone: {
        required: "Por favor insira um Telefone de contato.",
        minlength: "Telefone nao deve conter mais de 11 números DDD + Número."
      },
      time: {
        required: "Por favor escolha um horário estimado.",
      },
      date : {
        required: "Por favor escolha uma data."
      }
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});