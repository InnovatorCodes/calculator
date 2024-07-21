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
    console.log(op);
    switch (op) {
        case 'add':
            return(add(num1,num2));
        case 'sub':
            return(sub(num1,num2));
        case 'mul':
            return(mul(num1,num2));
        case 'div':
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
    numbuffer='';
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
    else if(event.classList.contains('sym')){
        if(!numbuffer.length){
            input.textContent=input.textContent.slice(0,-1)+event.textContent;
        }
        else{
            if(!changenum){
                num1=parseFloat(numbuffer);
                changenum=!changenum;
            } 
            else if(changenum){
                num2=parseFloat(numbuffer);
                num1=operate(op,num1,num2);
            } 
            input.textContent+=event.textContent;
        }
        op=event.id;
        if(op==='equals'){
            result.textContent=num1;
            num2=0;
        } 
        numbuffer='';
        console.log(num1,num2);
    }
})
