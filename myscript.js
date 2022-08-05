var listString = "abcdefghijklmnopqrstuvwxyz";
var listStringUper = "ABCDEDFGHIJKLMNOPQRSTUVWXYZ"
var listNumeric = '0123456789';
var listSymbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

function random_choice(keyList,len) {
    // keyList is the string w grouped values
    var choice = "";
    for (i=0;i<len;i++) {
        choice+=keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return choice
}
function main(len,options){
    passw = ""
    if (len % (options.length+1) ==0){
        lenfixed = len / (options.length + 1)
    }
    else{
        lenfixed = Math.floor(len/(options.length+1));
    }
    for (const opt of options){
        if (opt == 1){
            passw+=random_choice(listStringUper,lenfixed);
        }
        if (opt == 2){
            passw+=random_choice(listNumeric,lenfixed);
        }
        if (opt == 3){
            passw+=random_choice(listSymbols,lenfixed);
        }
    }
    lencomplete = len - passw.length;
    passw+=random_choice(listString,lencomplete);
    passw=passw.split('').sort(function(){return 0.5-Math.random()}).join('');
    return passw;
}

// DOM
var rangeInput = document.querySelector("#length_password");
var passLengthText = document.querySelector("#length_password_value");
rangeInput.addEventListener("input",function(){updateLengthPass();refreshClicked();})
var opt1 = document.querySelector("#option1");
var opt2 = document.querySelector("#option2");
var opt3 = document.querySelector("#option3");
// update value each time a switch is pressed
const popUpContainer = document.querySelector(".pop-up");
opt1.addEventListener("input",function () {
    {refreshClicked();}
})
opt2.addEventListener("input",function () {
    {refreshClicked();}
})
opt3.addEventListener("input",function () {
    {refreshClicked();}
})

function refreshClicked(){
    var rangeInput = document.querySelector("#length_password");
    lenghtPasswordInput = rangeInput.value;
    var options = [];
    var opt1 = document.querySelector("#option1");
    if (opt1.checked){
        options.push(1);
    }
    var opt2 = document.querySelector("#option2");
    if (opt2.checked){
        options.push(2);
    }
    var opt3 = document.querySelector("#option3");
    if (opt3.checked){
        options.push(3);
    }
    createdPassword = main(lenghtPasswordInput,options);
    showPassword(createdPassword);
}
const showPopUp = () =>{
    popUpContainer.style.display = "flex";
    setTimeout(() => {
        popUpContainer.style.display = "none";        
    }, 2000);
}
function copyClicked(){
    console.log("Copy clicked");
    showPopUp();
    var passwordOut = document.querySelector("#password");
    navigator.clipboard.writeText(passwordOut.textContent);
}
document.querySelector("#copy").addEventListener("click",copyClicked);

function showPassword(pass){
    var passwordOut = document.querySelector("#password");
    passwordOut.innerHTML = pass;
}

function updateLengthPass(){
    lengthPassword = rangeInput.value;
    passLengthText.innerHTML = lengthPassword;
}
updateLengthPass();
refreshClicked();

