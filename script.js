let pass1 = document.getElementById("password");
let pass2 = document.getElementById("passwordConf");

document.getElementById("password").oninput = function () {
    checkConditions();
}



// Checking Conditions 
document.getElementById("resetBtn").onclick = function (event) {
    event.preventDefault();
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("passwordConf").value;
    let popup = document.getElementById("popup");
    if (pass1 == pass2) {
        if (pass1.match(/[0-9]/) && pass1.match(/[a-z]/) && pass1.match(/[A-Z]/) && pass1.match(/[!@#$%^&*().,/;:[{}=+-]/) && pass1.length >= 8) {
            popup.classList.add("openPopup")


            document.getElementById("passwordView").innerText = pass1;
        } else {
            window.alert("Password does not meet requirements")
        }
    }
    else {
        password.style.border = "2px solid red";
        passwordConf.style.border = "2px solid red";
        setTimeout(() => {
            password.style.border = "";
            passwordConf.style.border = "";
        }, 5000);
        window.alert("Password does not match")
        document.getElementById("error").innerHTML = "Password Does Not Match*"
        lower.style.color = "red";
        upper.style.color = "red";
        oneNum.style.color = "red";
        specialChar.style.color = "red";
        min.style.color = "red";

        // Images Display To None
        specialCharImg.style.display = "none";
        minImg.style.display = "none";
        oneNumImg.style.display = "none";
        lowerImg.style.display = "none";
        upperImg.style.display = "none";

        password.style.border = "2px solid red";
        passwordConf.style.border = "2px solid red";

    }
    

}

//close popup
document.getElementById("closePop").onclick = function(){
    popup.classList.remove("openPopup")

}


// Function To Check Password Requirements 
function checkConditions() {
    let lower = document.getElementById("lower");
    let upper = document.getElementById("upper");
    let oneNum = document.getElementById("oneNum");
    let specialChar = document.getElementById("specialChar");
    let min = document.getElementById("min");

    let pass1 = document.getElementById("password").value;



    if (pass1.match(/[0-9]/)) {
        oneNum.style.color = "green";
        oneNumImg.style.display = "block";
    }
    else{
        oneNum.style.color = "red"
    }

    if (pass1.match(/[a-z]/)) {
        lower.style.color = "green";
        lowerImg.style.display = "block";
    }
    else{
        lower.style.color = "red"
    }

    if (pass1.match(/[A-Z]/)) {
        upper.style.color = "green";
        upperImg.style.display = "block";
    }
    else{
        upper.style.color = "red"
    }

    if (pass1.match(/[!@#$%^&*().,/;:[{}=+-]/)) {
        specialChar.style.color = "green";
        specialCharImg.style.display = "block";
    }
    else{
        specialChar.style.color = "red"
    }

    if (pass1.length >= 8) {
        min.style.color = "green";
        minImg.style.display = "block";
    }
    else{
        min.style.color = "red"
    }
}


//function to view when clicked on eye
document.getElementById("viewPass").onclick = function(){
    event.preventDefault();
    password.type = password.type === 'password' ? 'text' : 'password';
}

document.getElementById("viewPass2").onclick = function(){
    event.preventDefault();
    passwordConf.type = passwordConf.type === 'password' ? 'text' : 'password';
}

// document.getElementById("passwordView").onclick = function (){

    // let viewPassword1 = document.getElementById("password").value;

