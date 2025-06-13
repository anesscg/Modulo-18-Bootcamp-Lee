var Numberofbuttons=document.querySelectorAll(".drum").length;
for(var i=0; i<Numberofbuttons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",HandClick);

function HandClick(){
    var audio= new Audio('sounds/tom-1.mp3');
audio.play();}
}



