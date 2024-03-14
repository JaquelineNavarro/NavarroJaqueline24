function validateForm () {
    var isValid = true; 

    if (!isNameValid()) {
        isValid = false
    }

    if (!isEmailValid()) {
        isValid = false
    }

    if (!isCommentValid()){
        isValid = false
    }

    return isValid; 
}

function isNameValid () {
    var userName = document.getElementById("name").value;
    if (userName === "") {
        document.getElementById("nameError").innerHTML = "Name is requiered!"
       
        return false;
    }
    if (userName.length > 20) {
        document.getElementById("nameError").innerHTML = "Name cannot have more than 20 characters!"

        return false;
    }
    if (userName.match("^[a-zA-Z ,.'-]+$") === null) {
        document.getElementById("nameError").innerHTML = "Invalid character in last name (accepts only A-Z, a-z, and ,.'-)"
        return false;
    }

    document.getElementById("nameError").innerHTML = ""

    return true;
}

function isEmailValid () {
    var userEmail = document.getElementById("email").value;
    if (userEmail === "") {
        document.getElementById("emailError").innerHTML = "Email is requiered!"

        return false
    }
    var emailRequirment = /\S+@\S+\.\S+/;
    if (!emailRequirment.test(userEmail)) {
        document.getElementById("emailError").innerHTML = "Email required @ sign"
        
        return false;
    }
    document.getElementById("emailError").innerHTML = ""

    return true
}

function isCommentValid () {
    var userComment = document.getElementById("message").value;
    if (userComment === "") {
        document.getElementById("messageError").innerHTML = "Do not forget to write your message!"

        return false;
    }
    document.getElementById("messageError").innerHTML = ""

    return true 
}





// {/* <form action="name-of-your-thankyou-page.html" method="get"
// name="myContact"></form> */}


