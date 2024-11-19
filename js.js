const colors = ["red","yellow","blue","green","brown","purple","orange"];


function yesno(){
    let colorNumber = Math.floor(Math.random() * 7);
    let colorNumber2 = Math.floor(Math.random() * 7);
    document.getElementById('colorname').innerHTML = colors[colorNumber];
    document.getElementById('colorcolor').style = 'color :'+colors[colorNumber2];
}
function yes(){

}
function no(){
    
}
function start(){
    let countDownTime = 60;
    const countDownElement = document.getElementById('time');
    const interval = setInterval(function() {
        countDownTime--;
        countDownElement.textContent = 'Time: '+countDownTime  ;
        if (countDownTime <= 0) {
            clearInterval(interval);
            countDownElement.textContent = 'Time is up!';
        }
    }, 1000);
}