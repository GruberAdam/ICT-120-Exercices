//Initiation of the variables
var chkBox1 = document.getElementById("checkbox1");
var chkBox2 = document.getElementById("checkbox2");
var fourthDiv = document.getElementById("background-green");
var textThatDestroy = document.getElementById("text-destroy-div");
var destroyDiv = document.getElementById("div-destroy");
//Puts a green background with a big "YES" in white color
function greenYes() {
    if (chkBox1.checked && chkBox2.checked){ //Check if both checkboxes are checked
        console.log("both checkboxes checked");
        fourthDiv.innerText ="YES"; //Changes the text to "YES"
        fourthDiv.style.fontSize = "25px"; //Changes the size of the text to 25px
        fourthDiv.style.backgroundColor = "green"; //Puts the background in green
    }
}
chkBox1.addEventListener('change',greenYes);    //If the first checkbox got clicked
chkBox2.addEventListener('change',greenYes);    //If the second checkbox got clicked
//Destroy a inner div
function destroyTheDiv(){
    console.log("text to destroy div has been clicked");
    destroyDiv.remove();

}
textThatDestroy.addEventListener('click',destroyTheDiv);
