const colors = ["red","yellow","blue","green","brown","purple","orange"];
let score = 0;
let colorNumber =0;
let colorNumber2 =1;
let colorNumber3;
let hp = 4;
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
    Gameover();
}
document.onkeydown =function(e){
    var keyp =e.key;
    if(keyp == 'ArrowLeft'){
        no();
    }
    if(keyp == 'ArrowRight'){
        yes();
    }
}
function yes(){
    
    if(colorNumber == colorNumber2)
    {
        score +=100;
        document.getElementById('isGood').innerHTML = '✓';
    }
    else if(colorNumber!=colorNumber2 ){
        score-=100;
        document.getElementById('isGood').innerHTML = '✕';
        hp--;
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
        document.getElementById('isGood').innerHTML = '✓';
    }
    else if(colorNumber == colorNumber2 ){
        score-=100;
        document.getElementById('isGood').innerHTML = '✕';
        hp--;
        if(score<0){
            score+= (score * -1)
        }
    }
    scoring();
    yesno();
}
function startt(){
    hp = 4;
    score = 0;
    document.getElementById('main').style = "visibility: visible;display:block;";
    document.getElementById('start').style ='visibility: hidden;display:none;';
    yesno();
    let countDownTime = 60;
    const countDownElement = document.getElementById('time');
    const interval = setInterval(function() {
        countDownTime--;
        countDownElement.textContent = 'Time: '+countDownTime  ;
        if (countDownTime <= 0) {
            clearInterval(interval);
            document.getElementById('main').style = 'visibility: hidden;display:none;';
            document.getElementById('start').style ="visibility: visible;display:block;";
            document.getElementById('final').innerHTML ="Final score: "+score;
        }
        else if(hp == 0){
            clearInterval(interval);
            document.getElementById('gameover').innerHTML = 'Game Over!!!!'
            document.getElementById('main').style = 'visibility: hidden;display:none;';
            document.getElementById('start').style ="visibility: visible;display:block;";
            document.getElementById('final').innerHTML ="Final score: "+score; 
        }
    }, 1000);
}
function Gameover(){  
    document.getElementById('end').innerHTML = hp+'♡';
}

