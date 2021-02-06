var fName = document.getElementById("fNameField")
var lName = document.getElementById("lNameField")
var emailField = document.getElementById("emailField")
var passwordField = document.getElementById("passwordField")
var signUpBtn = document.getElementById("signUpBtn")
var logInBtn = document.getElementById("logInBtn")
var recovery = document.getElementById("recovery")



function signUp(){
    
    fName.style.display = "block";
    lName.style.display = "block";

    signUpBtn.style.display = "block";
    logInBtn.style.display = "none";

    recovery.style.display = "none";


}
function logIn(){
fName.style.display = "none";
lName.style.display = "none";

signUpBtn.style.display = "none";
logInBtn.style.display = "block";
recovery.style.display = "block";




}
