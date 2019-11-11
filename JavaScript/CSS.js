//Initialisation des variables
var firstDiv = document.getElementById("strike-through-blue-font");
var secondDiv = document.getElementById("back-to-normal");
var thirdDiv = document.getElementById("hover-arial");
//Background color is blue and its striked
function strikeThroughBlueFont() {
    console.log("First div clicked");
    this.style.backgroundColor = "blue";            //Puts the background color in blue
    this.style.textDecoration = 'line-through';     // Puts the text striked
}
firstDiv.addEventListener("click",strikeThroughBlueFont); //Check if div is getting clicked
//It puts the first div back to normal
function putTextNormal() {
    console.log("Second div clicked");
    firstDiv.style.backgroundColor = 'white';   //puts the background back to white
    firstDiv.style.textDecoration = 'none';     //remove the strike
}
secondDiv.addEventListener('click',putTextNormal);  //Check if div is getting clicked
//When mouse gets over it police changes
function switchPolice() {
    console.log("Mouse is over third div");
    this.style.fontFamily = "Arial";    //Switches the police in Arial
}
thirdDiv.addEventListener('mouseover',switchPolice); //Check if mouse is over third div
//When mouse leaves text is back to original form
thirdDiv.addEventListener('mouseout',function () { //Check if the mouse leaves the third div
    console.log("leaves the third div");
    this.style.fontFamily = "Times New Roman"; //Put it back to the original form
});