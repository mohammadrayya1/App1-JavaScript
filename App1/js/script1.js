var userAnswer=document.querySelector('#input1');
var ComputerAnswer=document.querySelector('#input2');
var userMesseg=document.querySelector('#pp');
var Result=document.querySelector('#Result');

var btn1=document.querySelector('#btn1');
var btn2=document.querySelector('#btn2');


function comparativ()
{
    if(userAnswer.value == ComputerAnswer.value)
    {
        Result.classList.remove('wrong');
        Result.classList.add('Result');
        Result.innerText="You are Win";
    }   
    else
    {
        Result.classList.remove('Result');
        Result.classList.add('wrong');
        Result.innerText="Try again";  
    }  
}

function check()
{
    if(userAnswer.value==""|| userAnswer.value>11 )
    {
   userMesseg.innerText="Please Enter Your Number <11";
    }
        else{
        ComputerAnswer.value= Math.floor(Math.random()*11);

                   comparativ();    

        userMesseg.innerText=""; 

            }
}


btn1.addEventListener('click',check);

  

btn2.addEventListener('click',function()
{
   userAnswer.value="";
   ComputerAnswer.value="";
   userMesseg.innerText="";
   Result.innerText="";

    
});

 