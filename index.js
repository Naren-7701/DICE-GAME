var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+ randomNumber1 + ".png";
var randomImage1 = "images/"+ randomDiceImage;

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImage1);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+ randomNumber2 + ".png";
var randomImage2 = "images/"+ randomDiceImage;

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImage2);

if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML= "Draw";
}
else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML= "Player1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins";
}


