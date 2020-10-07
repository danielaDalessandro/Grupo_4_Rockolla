window.addEventListener("load", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");


    let validateEmail = function(){
        let feedback = ""
        if(validator.isEmpty(email.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese un email"
        } else if (!validator.isEmail(email.value)){
            feedback = "Por favor ingrese un email válido" 
        }
        handleFeedback(email, "feedback-email", feedback)
    }

    let validatePassword = function(){
        let feedback = ""
        if(validator.isEmpty(password.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese una contraseña"
        } else if (!validator.isLength(password.value, {min : 7})) {
            feedback = "Por favor la contraseña debe tener más de 7 caracteres"
        }
        handleFeedback(password, "feedback-password", feedback)
    }

    email.addEventListener('blur', validateEmail);
    password.addEventListener('blur', validatePassword);

    let handleFeedback = function(element, elementID, feedback){
        let feedbackElement = document.getElementById(elementID);
        if (feedback){
            feedbackElement.innerHTML = feedback
            element.classList.add("input-error")
        }
    }
})

