//Initiation of variables
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var image = document.getElementById("switch-image");
button2.disabled = true; //Disable the button
button3.disabled = true; //Disable the button
button3.style.visibility = "hidden";  //Hide the button

//When button 1 is clicked
button1.addEventListener('click', function () {
    button1.disabled = true;    //Disable button 1
    button2.disabled = false;    //Enable button2
    button3.style.visibility = "visible";
    image.src = "../Images/marks.png"; //Change image
    button2.addEventListener('click',function () {
        button1.style.visibility = "hidden";
        button2.disabled = true;
        button3.disabled = false;
        image.src ="../Images/set.png";
        button3.addEventListener('click',function () {
            button2.style.visibility = 'hidden';
            button3.disabled = true;
            image.src ="../Images/go.png";
            //After 3 seconds do that
            setTimeout(
                function () {
                    image.src ='../Images/empty.png';
                    button1.style.visibility ="visible";
                    button1.disabled = false;
                    button2.disabled = true;
                    button2.style.visibility = 'visible';
                    button3.visibility = "hidden";
                },3000
            )
        })
    })
});

