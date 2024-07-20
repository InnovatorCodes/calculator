function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

let num1=0,num2=0,op;

function operate(op,num1,num2){
    switch (op) {
        case '+':
            return(add(num1,num2));
        case '-':
            return(sub(num1,num2));
        case 'x':
            return(mul(num1,num2));
        case '/':
            return(div(num1,num2));
        default:
            break;
    }
}

let numbuffer='';

const clrbtn=document.querySelector('button.clr');
const result=document.querySelector('.result');
const input=document.querySelector('.input');
clrbtn.addEventListener('click',()=>{
    result.textContent='';
    input.textContent='0';
    num1=0;
    num2=0;
    op='';
    changenum=false;
})

let changenum=false;

const btncontainer=document.querySelector('.buttons');
btncontainer.addEventListener('click',(event)=>{
    event=event.target;
    if(event.classList.contains('num')){
        numbuffer+=parseInt(event.textContent);
        if(input.textContent==='0') input.textContent=event.textContent;
        else input.textContent+=event.textContent;
    }
    else if(event.classList.contains('sym') && numbuffer.length){
        if(!changenum){
            num1=parseFloat(numbuffer);
            changenum=!changenum;
        } 
        else if(changenum){
            num2=parseFloat(numbuffer);
            num1=operate(op,num1,num2);
        } 
        op=event.textContent;
        if(op==='=') result.textContent=num1;
        else input.textContent+=op;
        numbuffer='';
        console.log(changenum);
        console.log(num1);
    }
    
})