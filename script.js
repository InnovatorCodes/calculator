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

let num1=0,op;

function operate(op,num1,num2){
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
const upper=document.querySelector('.upper');
const lower=document.querySelector('.lower');
clrbtn.addEventListener('click',()=>{
    upper.textContent='';
    lower.textContent='0';
    num1=0;
    op='';
    first=true;
    numbuffer='';
})

let first=true;

const btncontainer=document.querySelector('.buttons');
btncontainer.addEventListener('click',(event)=>{
    event=event.target;
    if(event.classList.contains('num')){
        numbuffer+=parseInt(event.textContent);
        lower.textContent=numbuffer;
    }

    else if(event.classList.contains('sym')){
        if(!numbuffer.length){
                if(!num1==='0') upper.textContent=upper.textContent.slice(0,-1)+event.textContent;
                else if(upper.textContent.at(-1)==='=') upper.textContent=num1+event.textContent;
            } 
        else if(event.id==='equals'){
            upper.textContent+=numbuffer+'=';
            num1=operate(op,num1,parseFloat(numbuffer))
            lower.textContent=num1;
            numbuffer='';
        }
        else{
            if(first){
                num1=parseFloat(numbuffer);
                first=!first;
                upper.textContent=num1+event.textContent;
            } 
            else if(!first){
                num1=operate(op,num1,parseFloat(numbuffer));
                upper.textContent=num1+event.textContent;
                lower.textContent=num1;
            }   
        }
        op=event.id;
        numbuffer='';   
    }
})
