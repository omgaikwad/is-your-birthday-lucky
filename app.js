const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputDiv = document.querySelector("#output-div");


checkButton.addEventListener("click", function isYourBirthdayLucky(){
    const dob = dateOfBirth.value;
    const luckyNumberValue = Number(luckyNumber.value);
    const sum = calculateSum (dob);

    if(sum && luckyNumberValue){
        if(sum % luckyNumberValue === 0){
            // console.log("Your birthday is lucky");
            outputDiv.innerText = "Your Birthday is lucky🚀";
        }
        else{
            // console.log("Sorry your birthday is not lucky");
            outputDiv.innerText = "Sorry, Your birthday is not that lucky😟";
        }
    }
    else{
        outputDiv.innerText = "Please enter both the fields😡"
    }
    
    

});

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    
    let sumOfBirthday = 0;
    for(let i=0; i<dob.length; i++){
        sumOfBirthday = sumOfBirthday + Number(dob[i]);
    }

    return sumOfBirthday;
}
