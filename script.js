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

let num1,num2,op;

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

const clrbtn=document.querySelector('button.clr');
const result=document.querySelector('.result');
const input=document.querySelector('.input');
clrbtn.addEventListener('click',()=>{
    result.textContent='';
    input.textContent='';
})