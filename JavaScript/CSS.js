//Initialisation des variables
firstDiv = document.getElementById("strike-through-blue-font");
secondDiv = document.getElementById("back-to-normal");
//Background color is blue and its striked
function strikeThroughBlueFont() {
    console.log("First div clicked");
    this.style.backgroundColor = "blue";
    this.style.textDecoration = 'line-through';
}
firstDiv.addEventListener("click",strikeThroughBlueFont); //Check if div is getting clicked
//It puts the first div back to normal
function putTextNormal() {
    console.log("Second div clicked");
    firstDiv.style.backgroundColor = 'white';
    firstDiv.style.textDecoration = 'none';
}
secondDiv.addEventListener('click',putTextNormal);