window.addEventListener("load", function () {
  let form = document.getElementById("form");
  let name = document.getElementById("nombre");
  let last_name = document.getElementById("apellido");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let passwordConfirm = document.getElementById("passwordConfirm");
  let avatar = document.getElementById("avatar");
  const ALLOWED_IMAGES_EXT = ["jpeg", "jpg", "png", "gif"];

  let handleFeedback = function (element, elementID, feedback) {
    let feedbackElement = document.getElementById(elementID);
    feedbackElement.innerHTML = feedback;
    feedback
      ? element.classList.add("input-error")
      : element.classList.remove("input-error");
  };

  let validateName = function () {
    let feedback = "";
    if (validator.isEmpty(name.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un nombre";
    } else if (!validator.isLength(name.value, { min: 2 })) {
      feedback = "Por favor el nombre debe tener más de 2 caracteres";
    }
    handleFeedback(name, "feedback-name", feedback);
    return feedback;
  };

  let validateLastName = function () {
    let feedback = "";
    if (validator.isEmpty(last_name.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un apellido";
    } else if (!validator.isLength(last_name.value, { min: 2 })) {
      feedback = "Por favor el apellido debe tener más de 2 caracteres";
    }
    handleFeedback(last_name, "feedback-last-name", feedback);
    return feedback;
  };

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
    return feedback;
  };

  let validatePasswordConfirm = function () {
    let feedback = "";
    if (passwordConfirm.value !== password.value) {
      feedback = "Las contraseñas deben coincidir";
    }
    handleFeedback(passwordConfirm, "feedback-password-confirm", feedback);
    return feedback;
  };

  let validateAvatar = function () {
    let feedback = "";
    let ext = avatar.value.split(".")[1];
    if (!ALLOWED_IMAGES_EXT.includes(ext)) {
      feedback = "Imagen de formato inválido";
    }
    handleFeedback(avatar, "feedback-avatar", feedback);
    return feedback;
  };

  name.addEventListener("blur", validateName);
  last_name.addEventListener("blur", validateLastName);
  email.addEventListener("blur", validateEmail);
  password.addEventListener("blur", validatePassword);
  passwordConfirm.addEventListener("blur", validatePasswordConfirm);
  avatar.addEventListener("blur", validateAvatar);

  form.addEventListener("submit", function (submit) {
    if (
      validateName() ||
      validateLastName() ||
      validateEmail() ||
      validatePassword() ||
      validatePasswordConfirm() ||
      validateAvatar()
    ) {
      submit.preventDefault();
    }
  });
});
