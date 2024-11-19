const colors = ["red","yellow","blue","green","brown","purple","orange"];
let score = 0;
let colorNumber ;
let colorNumber2;
let colorNumber3;

function scoring(){
    document.getElementById('score').innerHTML = "Score:   "+score
}

function yesno(){
    colorNumber  = Math.floor(Math.random() * 7);
    colorNumber2 = Math.floor(Math.random() * 7);
    colorNumber3 = Math.floor(Math.random() * 7);
    document.getElementById('colorname').innerHTML = colors[colorNumber];
    document.getElementById('colorcolor').innerHTML = colors[colorNumber3];
    document.getElementById('colorcolor').style = 'color :'+colors[colorNumber2];

}
function yes(){
    
    if(colorNumber == colorNumber2)
    {
        score +=100;
    }
    else if(colorNumber!=colorNumber2 ){
        score-=100;
        if(score<0){
            score+= (score * -1)
        }
    }
    scoring();
    yesno();
}
function no(){
    if(colorNumber!=colorNumber2){
        score +=100;
    }
    else if(colorNumber == colorNumber2 ){
        score-=100;
        if(score<0){
            score+= (score * -1)
        }
    }
    scoring();
    yesno();
}
function startt(){
    document.getElementById('main').style = 'visibility: visible;display:block;';
    document.getElementById('start').style ='visibility: hidden;display:none;';
    yesno();
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

