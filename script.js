function startGame(){
    document.getElementById("main").style.display="flex"
    document.getElementById("start").style.display="none"

var timer=60;
var score=0;
var hitrn=0;

    function increaseScore(){
        score += 10;
        document.querySelector("#scoreVal").textContent=score;
    }
    
    function getNewHit(){
        hitrn=Math.floor(Math.random()*10);
        document.querySelector("#hitVal").textContent=hitrn;
    }
    
    
    function makeBubble(){
        var clutter="";
    for(var i=1;i<=500;i++){
        var rn=Math.floor(Math.random()*10)
        clutter  +=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=clutter;
    }
    
    function runTimer(){
        var timerInt = setInterval(function (){
            if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;
            }
            else{
                clearInterval(timerInt);
                document.querySelector("#pbtm").innerHTML=`Score:${score}<br>GAME OVER`
            }
        },1000);
    }
    document.querySelector("#pbtm").addEventListener("click",function(details){
        var clickedNum=Number(details.target.textContent);
        if(clickedNum==hitrn){
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })
    
    runTimer();
    makeBubble();
    getNewHit();
}
