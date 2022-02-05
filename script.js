setInterval(setTime);

function setTime(){

    const currentTime = new Date();
    
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
    
    const secDeg = (seconds/60);
    const minDeg = (minutes+secDeg)/60;
    const houDeg = (hours+minDeg)/12;

    rotateHand(document.getElementById("sec-body"),secDeg);
    rotateHand(document.getElementById("min-body"),minDeg);
    rotateHand(document.getElementById("hour-body"),houDeg);

}

function rotateHand(hand,rotationDeg){
    hand.style.transform = `rotate(${(rotationDeg*360)+90}deg)`;
}

