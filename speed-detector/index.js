const prompt =require("prompt-sync")()
//prompts the user to input speed of the car
let speedInput=prompt("Enter the speed of the car")

function getSpeed (){
    let speed = speedInput
    //checking if the speed is above the speed limit >70
    if (speed>=0 && speed<=70){
        console.log('Ok');
    }
    else if (speed>70){
        points();
    }
}
//calculating points for speed
function points(){
let speed = speedInput
let point=(speed -70)/5;
//checks for points less than 12
if (point<12){
    console.log(`points:${point}`);
}
//checks for points above 12
else if (point>=12){
    console.log(`points:${point}`)
    console.log('License is suspended')
}
    
}
getSpeed();