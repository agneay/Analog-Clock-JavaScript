const second_hand = document.getElementById("second-hand");
const minute_hand = document.getElementById("minute-hand");
const hour_hand = document.getElementById("hour-hand");

function getTime(){
    const n = new Date();
    const second = n.getSeconds();
    const minutes = n.getMinutes();
    const hours = n.getHours();

    console.log("The time is"+" "+n);

    const interval = 6;

    second_hand.style.transform = "rotate("+ (second*interval) +"deg)"
    minute_hand.style.transform = "rotate("+ (minutes*interval+second/10) +"deg)"
    hour_hand.style.transform = "rotate("+ (hours*30) +"deg)"
}

setInterval(getTime,100);
