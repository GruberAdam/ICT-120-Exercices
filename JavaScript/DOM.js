//Initiation of variables
var userInput = document.getElementById("user-name-input");
var userOutput = document.getElementById("user-initial-output");
var buttonSubmit = document.getElementById("submit-button");

//Outputs the initals
function writeInitials() {
    console.log("input button has been clicked");
    var initials = userInput.value.match(/\b(\w)/g); //Gets the first letter of every start of words
    initials = initials.join(""); //takes out the ,
    userOutput.value = initials; //show the result
}
buttonSubmit.addEventListener('click', writeInitials); //When button gets clicked