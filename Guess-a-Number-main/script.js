
let message=document.querySelector('.message');
let number=document.querySelector('.number');


let sceretnum=Math.floor(Math.random()*20)+1;

let score=20;
let highscore=0;

document.querySelector('.again').addEventListener('click',()=>{
    
    sceretnum=Math.floor(Math.random()*20)+1;
    
    message.textContent="Start guessing...";
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    highscore=Math.max(highscore,score);
    
    document.querySelector('.guess').value='';
    document.querySelector('.highscore').textContent=highscore;

    score=20;
    document.querySelector('.score').textContent=score;
   
   
});

let guessfun=()=>{
    var num=Number(document.querySelector('.guess').value);

    if(!num)
    {
        message.textContent="🚫 Not A Number!";
    }
    else if(num==sceretnum)
    {
        number.textContent=sceretnum;
        message.textContent="Correct Number";
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
       
    }
    else if(num<sceretnum)
    {
       if(score>1)
       {
        message.textContent="To loW....";
        score--;
        document.querySelector('.score').textContent=score;
       }
       else 
       {
        message.textContent="You Lost the Game....";
        document.querySelector('.score').textContent=0;
       }
    }
    else 
    {
       if(score>1)
       {
        message.textContent="Too High....";
        score--;
        document.querySelector('.score').textContent=score;
       }
       else 
       {
        message.textContent="You Lost the Game....";
        document.querySelector('.score').textContent=0;
       }
    }

};

document.querySelector('.check').addEventListener('click',guessfun);


