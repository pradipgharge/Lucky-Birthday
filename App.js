var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector(".output-div");
var errorMessageDiv = document.querySelector("#error-message");

btnCheck.addEventListener("click", clickHandler);
outputDiv.style.display = "none";

function clickHandler(){
    var dateOfBirth = birthDate.value;
    var luckyNo = luckyNumber.value;

    if(dateOfBirth === "" || luckyNo === ""){
        errorMessage("Please enter valid birthdate and lucky number");
    }
    else{
        errorMessageDiv.style.display = "none";
        outputDiv.style.display = "block";
        
        var dateString = dateOfBirth.split("-").join("");
        var dateSum = calculateDateSum(dateString);

        if(dateSum % luckyNo === 0){
           outputDiv.innerText = "Yay ! your birthday is a lucky number 🥳";
        }
        else{
            outputDiv.innerText = "Oops, your birthday isn't a lucky number 🙁";
        }
    } 
}    

function calculateDateSum(dateString){
    let sum = 0;
    for( let everyLetter of dateString){
        sum = sum + Number(everyLetter);
    }
    return sum;
}

function errorMessage(text){
    errorMessageDiv.style.display = "block";
    errorMessageDiv.innerText = text;
   
}