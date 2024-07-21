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

let num=0,op;

function operate(op,num,num2){
    switch (op) {
        case 'add':
            return(add(num,num2));
        case 'sub':
            return(sub(num,num2));
        case 'mul':
            return(mul(num,num2));
        case 'div':
            return(div(num,num2));
        default:
            break;
    }
}

function isSymbol(char){
    return char==='+'||char==='-'||char==='&times'||char==='+&#247'||char==='%'
}

let numbuffer='';
let startup=true;

const clrbtn=document.querySelector('button.clr');
const upper=document.querySelector('.upper');
const lower=document.querySelector('.lower');
clrbtn.addEventListener('click',()=>{
    upper.textContent='';
    lower.textContent='0';
    num=0;
    op='';
    startup=true;
    numbuffer='';
})

const btncontainer=document.querySelector('.buttons');
const dotbtn=btncontainer.querySelector('.num#dot');
const bkspc=document.querySelector('#bckspc');

bkspc.addEventListener('click',()=>{
    if(!op){
        numbuffer=lower.textContent;
        numbuffer=numbuffer.slice(0,-1);
        lower.textContent=numbuffer;
        if(!numbuffer.length){
            numbuffer='0'
            lower.textContent='0';
        }   
    }
});

btncontainer.addEventListener('click',(event)=>{
    event=event.target;
    if(event.classList.contains('num')){
        if(!(!numbuffer.length && event.textContent==0 && lower.textContent=='0')){
            if(event.id=='dot' && lower.textContent=='0'|| numbuffer==''){
                numbuffer='0.';
                lower.textContent=numbuffer;
            } 
            else{
                numbuffer+=event.textContent;
                lower.textContent=numbuffer;
            }
            if(event.id=='dot') dotbtn.disabled=true;
        } 
    }
    else if(event.classList.contains('sym')){
        dotbtn.disabled=false;
        if(!numbuffer.length){
            upper.textContent=num+event.textContent;
            op=event.id;
        }
        else{
            if(startup){
                if(!op){
                    num=parseFloat(numbuffer);
                    op=event.id;
                } 
                else if(op){
                    num=operate(op,num,parseFloat(numbuffer));
                    num=parseFloat(num.toFixed(4));
                    op=event.id;
                    lower.textContent=num;
                }
                upper.textContent=num+event.textContent;
                numbuffer='';
                startup=!startup;
            }
            else{
                if(op) num=operate(op,num,parseFloat(numbuffer));   
                console.log(num,op);
                num=parseFloat(num.toFixed(4));
                op=event.id;
                lower.textContent=num;
                upper.textContent=num+event.textContent;
                numbuffer='';
            }
        }
    }
    else if(event.classList.contains('res')){
        if(numbuffer.length){
            upper.textContent+=numbuffer;
            num=operate(op,num,parseFloat(numbuffer));
            num=parseFloat(num.toFixed(4));
            lower.textContent=num;
            upper.textContent+='=';
            op='';
        }
    }
})