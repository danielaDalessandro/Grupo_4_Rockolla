window.addEventListener("load", function(){
    let form = document.getElementById("");
    let title = document.getElementById("titulo");
    let artist = document.getElementById("artista");
    let label = document.getElementById("sello");
    let genre = document.getElementById("genero");
    let publishingDate = document.getElementById("fechaPublicacion");
    let price = document.getElementById("precio");
    let stock = document.getElementById("stock");
    let format = document.getElementById("formato");
    let inches = document.getElementById("pulgadas");
    let rpm = document.getElementById("rpm");
    let cover = document.getElementById("tapa");
    let description = document.getElementById("descripcion");
    const ALLOWED_IMAGES_EXT = ["jpeg", "jpg", "png", "gif"]

    let validateTitle = function(){
        let feedback = ""
        if(validator.isEmpty(title.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese un título"
        } else if (!validator.isLength(title.value, {min : 5})) {
            feedback = "Por favor el título debe tener más de 5 caracteres"
        }
        handleFeedback(title, "feedback-title", feedback)
    }

    let validateArtist = function(){
        let feedback = ""
        if(validator.isEmpty(artist.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese un artista"
        } 
        handleFeedback(artist, "feedback-artist", feedback)
    }

    let validateLabel = function(){
        let feedback = ""
        if(validator.isEmpty(label.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese un sello"
        }
        handleFeedback(label, "feedback-label", feedback)
    }

    let validateGenre = function(){
        let feedback = ""
        if(validator.isEmpty(genre.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese un género"
        } 
        handleFeedback(genre, "feedback-genre", feedback)
    }
    
    let validatePublishingDate = function(){
        let feedback = ""
        if(validator.isEmpty(publishingDate.value, {ignore_whitespace: true})){
            feedback = "Por favor ingrese una fecha de publicación"
        } 
        handleFeedback(publishingDate, "feedback-publishing-date", feedback)
}


let validatePrice = function(){
    let feedback = ""
    if(validator.isEmpty(price.value, {ignore_whitespace: true})){
        feedback = "Por favor ingrese un precio"
    } 
    handleFeedback(price, "feedback-price", feedback)
}

let validateStock = function(){
    let feedback = ""
    if(stock.value < 1){
        feedback = "Por favor ingrese un stock válido"
    } 
    handleFeedback(stock, "feedback-stock", feedback)
}

let validateFormat = function(){
    let feedback = ""
    if(validator.isEmpty(format.value, {ignore_whitespace: true})){
        feedback = "Por favor ingrese un formato"
    } 
    handleFeedback(format, "feedback-format", feedback)
}

let validateInches = function(){
    let feedback = ""
    if(validator.isEmpty(inches.value, {ignore_whitespace: true})){
        feedback = "Por favor seleccione las pulgadas"
    } 
    handleFeedback(inches, "feedback-inches", feedback)
}

let validateRPM = function(){
    let feedback = ""
    if(validator.isEmpty(rpm.value, {ignore_whitespace: true})){
        feedback = "Por favor seleccione las revoluciones"
    } 
    handleFeedback(rpm, "feedback-rpm", feedback)
}

    let validateCover = function(){
        let feedback = ""
        let ext = cover.value.split(".")[1];
        if(!ALLOWED_IMAGES_EXT.includes(ext)){
            feedback = "Tapa de formato inválido"
        }
        handleFeedback(cover, "feedback-cover", feedback)
        }

        let validateDescription = function(){
            let feedback = ""
            if(validator.isEmpty(description.value, {ignore_whitespace: true})){
                feedback = "Por favor ingrese una descripción"
            } else if (!validator.isLength(title.value, {min : 20})) {
                feedback = "Por favor la descripcióm debe tener más de 20 caracteres"
            }
            handleFeedback(description, "feedback-description", feedback)
        }

        title.addEventListener('blur', validateTitle);
        artist.addEventListener('blur', validateArtist);
        label.addEventListener('blur', validateLabel);
        genre.addEventListener('blur', validateGenre);
        publishingDate.addEventListener('blur', validatePublishingDate);
        price.addEventListener('blur', validatePrice);
        stock.addEventListener('blur', validateStock);
        format.addEventListener('blur', validateFormat);
        inches.addEventListener('blur', validateInches);
        rpm.addEventListener('blur', validateRPM);
        cover.addEventListener('blur', validateCover);
        description.addEventListener('blur', validateDescription);

        let handleFeedback = function(element, elementID, feedback){
            let feedbackElement = document.getElementById(elementID);
            if (feedback){
                feedbackElement.innerHTML = feedback
                element.classList.add("input-error")
            }
        }

})