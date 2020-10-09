window.addEventListener("load", function () {
  let form = document.getElementById("form");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let validateEmail = function () {
    let feedback = "";
    if (validator.isEmpty(email.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un email";
    } else if (!validator.isEmail(email.value)) {
      feedback = "Por favor ingrese un email válido";
    }
    handleFeedback(email, "feedback-email", feedback);
    return feedback;
  };

  let validatePassword = function () {
    let feedback = "";
    if (validator.isEmpty(password.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese una contraseña";
    } else if (!validator.isLength(password.value, { min: 7 })) {
      feedback = "Por favor la contraseña debe tener más de 7 caracteres";
    }
    handleFeedback(password, "feedback-password", feedback);
    return feedback
  };

  email.addEventListener("blur", validateEmail);
  password.addEventListener("blur", validatePassword);

  let handleFeedback = function (element, elementID, feedback) {
    let feedbackElement = document.getElementById(elementID);
    feedbackElement.innerHTML = feedback;
    feedback
      ? element.classList.add("input-error")
      : element.classList.remove("input-error");
  };

  form.addEventListener("submit", function (submit) {
    if (validateEmail() || validatePassword()) {
      submit.preventDefault();
    }
  });
});
