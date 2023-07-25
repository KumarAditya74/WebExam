console.log("This is clock.js")

function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minute or second is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour>12) ? currentHour + 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    
    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12 ) ? "AM" : "PM";

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes  
                        + ":" + currentSeconds

    // Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}
let card = document.getElementById('card').addEventListener('mouseover',abd);
let carde = document.getElementById('card').addEventListener('mouseout',abde);

function abd(){
    document.getElementById('card').style.background = 'green';
}
function abde(){
    document.getElementById('card').style.background= 'bisque';
}
let aside = document.getElementById('aside').addEventListener('mouseover',abdk);
let asider = document.getElementById('aside').addEventListener('mouseout',abdeg);

function abdk(){
    document.getElementById('aside').style.background = 'orange';
}
function abdeg(){
    document.getElementById('aside').style.background= 'brown';
}
let time = document.getElementById('clock').addEventListener('mouseover',abdkl);
let timer = document.getElementById('clock').addEventListener('mouseout',abdegm);

function abdkl(){
    document.getElementById('clock').style.background = 'purple';
}
function abdegm(){
    document.getElementById('clock').style.background= 'bisque';
}
let card1 = document.getElementById('card1').addEventListener('mouseover',abd1);
let carde1 = document.getElementById('card1').addEventListener('mouseout',abde1);

function abd1(){
    document.getElementById('card1').style.background = 'green';
}
function abde1(){
    document.getElementById('card1').style.background= 'bisque';
}
let card2 = document.getElementById('card2').addEventListener('mouseover',abd2);
let carde2 = document.getElementById('card2').addEventListener('mouseout',abde2);

function abd2(){
    document.getElementById('card2').style.background = 'green';
}
function abde2(){
    document.getElementById('card2').style.background= 'bisque';
}
let card3 = document.getElementById('card3').addEventListener('mouseover',abd3);
let carde3 = document.getElementById('card3').addEventListener('mouseout',abde3);

function abd3(){
    document.getElementById('card3').style.background = 'green';
}
function abde3(){
    document.getElementById('card3').style.background= 'bisque';
}
let card4 = document.getElementById('card4').addEventListener('mouseover',abd4);
let carde4 = document.getElementById('card4').addEventListener('mouseout',abde4);

function abd4(){
    document.getElementById('card4').style.background = 'green';
}
function abde4(){
    document.getElementById('card4').style.background= 'bisque';
}
let card5 = document.getElementById('card5').addEventListener('mouseover',abd5);
let carde5 = document.getElementById('card5').addEventListener('mouseout',abde5);

function abd5(){
    document.getElementById('card5').style.background = 'green';
}
function abde5(){
    document.getElementById('card5').style.background= 'bisque';
}
let card6 = document.getElementById('card6').addEventListener('mouseover',abd6);
let carde6 = document.getElementById('card6').addEventListener('mouseout',abde6);

function abd6(){
    document.getElementById('card6').style.background = 'green';
}
function abde6(){
    document.getElementById('card6').style.background= 'bisque';
}
let card7 = document.getElementById('card7').addEventListener('mouseover',abd7);
let carde7 = document.getElementById('card7').addEventListener('mouseout',abde7);

function abd7(){
    document.getElementById('card7').style.background = 'green';
}
function abde7(){
    document.getElementById('card7').style.background= 'bisque';
}
let card8 = document.getElementById('card').addEventListener('mouseover',abd8);
let carde8 = document.getElementById('card').addEventListener('mouseout',abde8);

function abd8(){
    document.getElementById('card8').style.background = 'green';
}
function abde8(){
    document.getElementById('card8').style.background= 'bisque';
}
let card9 = document.getElementById('card9').addEventListener('mouseover',abd9);
let carde9 = document.getElementById('card9').addEventListener('mouseout',abde9);

function abd9(){
    document.getElementById('card9').style.background = 'green';
}
function abde9(){
    document.getElementById('card9').style.background= 'bisque';
}
let card10 = document.getElementById('card10').addEventListener('mouseover',abd10);
let carde10 = document.getElementById('card10').addEventListener('mouseout',abde10);

function abd10(){
    document.getElementById('card10').style.background = 'green';
}
function abde10(){
    document.getElementById('card10').style.background= 'bisque';
}
