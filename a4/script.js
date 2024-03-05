function validateForm () {
    var isValid = true; 

    if (!isFirstNameValid()) {
        isValid = false
    }

    if (!isLastNameValid()) {
        isValid = false 
    }

    if (!isEmailValid()) {
        isValid = false
    }

    if (!isPhoneValid()) {
        isValid = false
    }

    if (!isUserNameValid()) {
        isValid = false
    }

    if (!isPasswordValid()) {
        isValid = false
    }

    if (!isAddressValid()) {
        isValid = false
    }

    if (!isCityValid()) {
        isValid = false
    }

    if (!isStateValid()) {
        isValid = false
    }

    if (!isCountryValid()) {
        isValid = false
    }

    if (!isZipCodeValid()) {
        isValid = false
    }

    return isValid; 
}

function isFirstNameValid () {
    var firstname = document.getElementById("FirstName").value;
    if (firstname === "") {
        document.getElementById("firstNameError").innerHTML = "First name is required!"
        
        return false;
    }
    if (firstname.length > 20) {
        document.getElementById("firstNameError").innerHTML = "First name cannot have more than 20 characters"
        
        return false;
    }
    if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        document.getElementById("firstNameError").innerHTML = "Invalid character in last name (accepts only A-Z, a-z, and ,.'-)"
        
        return false;
    }
    document.getElementById("firstNameError").innerHTML = ""

   return true
}

function isLastNameValid ()  {
    var lastname = document.getElementById("LastName").value;
    if (lastname === "") {
        document.getElementById("lastNameError").innerHTML = "Last name is required!"
        
        return false;
    }
    if (lastname.length > 50) {
        document.getElementById("lastNameError").innerHTML = "Last name cannot have more than 50 characters"
        
        return false;
        
    }
    document.getElementById("lastNameError").innerHTML = ""

   return true
}

function isEmailValid () {
    var userEmail = document.getElementById("Email").value;
    if (userEmail === "") {
        document.getElementById("emailError").innerHTML = "Email is required!"
        
        return false;
    }
    var emailRequirment = /\S+@\S+\.\S+/;
    if (!emailRequirment.test(userEmail)) {
        document.getElementById("emailError").innerHTML = "Email required @ sign"
        
        return false;
    }
    document.getElementById("emailError").innerHTML = ""

    return true
}

function isPhoneValid () {
    var userPhone = document.getElementById("Phone").value;
    if (userPhone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required!"
        
        return false;
    }
    if (userPhone.length > 15) {
        document.getElementById("phoneError").innerHTML = "Phone number cannot have more than 15 characters"
        
        return false;
    }
    var numbersvariables = (/^[0-9]+$/);
    if (!numbersvariables.test(userPhone)) {
        document.getElementById("phoneError").innerHTML = "Phone number section only accept numbers"
        
        return false;
    }

    document.getElementById("phoneError").innerHTML = ""

    return true

    }
    
function isUserNameValid () {
    var userName = document.getElementById("Username").value;
    if (userName === "") {
        document.getElementById("userNameError").innerHTML = "Username is required!"
        
        return false;
    }
    if (userName.length > 12) {
        document.getElementById("userNameError").innerHTML = "Username cannot have more than 12 characters"
        
        return false;
    }

    document.getElementById("userNameError").innerHTML = ""

    return true
}

function isPasswordValid () {
    var userPassword = document.getElementById("Password").value;
    if (userPassword === "") {
        document.getElementById("passwordError").innerHTML = "Password is required!"
        
        return false;
    }
    if (userPassword.length > 7) {
        document.getElementById("passwordError").innerHTML = "Password cannot have more than 7 characters"
        
        return false;
    }

    var passwordElements = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
    if (!passwordElements.test(userPassword)) {
        document.getElementById("passwordError").innerHTML = "Password require 1 UPPER, 1 lower, 1 number, and 1 special character"
        
        return false;
    }

    document.getElementById("passwordError").innerHTML = ""
    
    return true
}

function isAddressValid () {
    var userAddress = document.getElementById("Address").value;
    if (userAddress === "") {
        document.getElementById("addressError").innerHTML = "Address is required!"
        
        return false;
    }

    document.getElementById("addressError").innerHTML = ""

    return true
}

function isCityValid () {
    var userCity = document.getElementById("City").value;
    if (userCity === "") {
        document.getElementById("cityError").innerHTML = "City is required!"
        
        return false;
    }

    document.getElementById("cityError").innerHTML = ""

    return true
}


function isStateValid () {
    var userState = document.getElementById("State").value;
    if (userState === "") {
        document.getElementById("stateError").innerHTML = "State is required!"
        
        return false;
    }

    document.getElementById("stateError").innerHTML = ""

    return true
}

function isCountryValid () {
    var userCountry = document.getElementById("Country").value;
    if (userCountry === "") {
        document.getElementById("countryError").innerHTML = "Country is required!"
        
        return false;
    }

    document.getElementById("countryError").innerHTML = ""

    return true
}

function isZipCodeValid () {
    var userZipCode = document.getElementById("ZipCode").value;
    var isUSASelected = document.getElementById("Country").value === "USA";
    if (isUSASelected && userZipCode === "") {
        document.getElementById("zipCodeError").innerHTML = "Since you selected as your country USA, you need to write your zip code!"
        
        return false;
    }

    document.getElementById("zipCodeError").innerHTML = ""

    return true
}




