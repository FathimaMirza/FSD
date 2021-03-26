// signup
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let signupEmail = document.getElementById("signupEmail");
let phoneNumber = document.getElementById("phoneNumber");
let inputPass = document.getElementById("inputPass");
//login
let exampleInputEmail1 = document.getElementById("exampleInputEmail1");
let exampleInputPassword1 = document.getElementById("exampleInputPassword1");
//signup function
function validate1(){
    if(firstName.value.trim()=="" || lastName.value.trim()=="" || signupEmail.value.trim()=="" || phoneNumber.value.trim()=="" || inputPass.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }
    else if(phoneNumber.value.length<10){
        alert("Phone Number Invalid");
        phoneNumber.style.border="2px solid red";
        return false;
    }
    else if(inputPass.value.length<8){
        alert("Password too short");
        phoneNumber.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}
//login function
function validate2(){
    if(exampleInputEmail1.value.trim()=="" || exampleInputPassword1.value.trim()==""){
        alert("Fields cannot be empty");
        return false;
    }
    else if(exampleInputPassword1.value.length<8){
        alert("Password too short");
        exampleInputPassword1.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}

function passStrength()
{
    if (inputPass.value.length<=9)
    {
        inputPass.style.border = "red 3px solid";
        passStrLabel.style.color = "red";
        passStrLabel.innerHTML = "Weak Password!";
    }
    else if (inputPass.value.length>9 && inputPass.value.length<=12)
    {
        inputPass.style.border = "yellow 3px solid";
        passStrLabel.style.color = "orange";
        passStrLabel.innerHTML = "Medium Password";
    }
    else if (inputPass.value.length>12)
    {
        inputPass.style.border = "green 3px solid";
        passStrLabel.style.color = "green";
        passStrLabel.innerHTML = "Strong Password!";
    }
    else if(inputPass.value.length == 0)
    {
        inputPass.style.border = "";
        passStrLabel.innerHTML = "";
    }
}
