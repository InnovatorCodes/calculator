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

document.querySelector('.buttons').addEventListener('mousedown',(event)=>{
    event.preventDefault();
})

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
        else if(numbuffer=='-'){
            numbuffer='0';
        }
        num=parseFloat(numbuffer);
    }
});

btncontainer.addEventListener('click',(event)=>{
    event=event.target;
    if(event.classList.contains('num') && upper.textContent.at(-1)!='='){
        if(!(event.textContent==0 && lower.textContent=='0')){
            if(event.id==='dot' && (lower.textContent=='0'|| numbuffer=='')){
                numbuffer='0.';
                lower.textContent=numbuffer;
            }
            else if(lower.textContent=='-'){
                numbuffer='-'+event.textContent;
                lower.textContent=numbuffer;
            }
            else{
                numbuffer+=event.textContent;
                lower.textContent=numbuffer;
            }
            if(event.id=='dot'){
                dotbtn.disabled=true;
            } 
        } 
    }
    else if(event.classList.contains('sym')){
        if(lower.textContent=='-') lower.textContent=numbuffer;
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
            numbuffer='';
        }
    }
})

document.addEventListener('keydown',(event)=>{
    document.querySelector('.display').focus();
    const newevent=new CustomEvent('click');
    let key=event.key.toLowerCase();
     console.log(key);
    switch (key) {
        case '0':
            document.querySelector('.num#zero').click();
            break;
        case '1':
            btncontainer.querySelector('.num#one').click()
            break;
        case '2':
            btncontainer.querySelector('.num#two').click();
            break;
        case '3':
            btncontainer.querySelector('.num#three').click();
            break;
        case '4':
            btncontainer.querySelector('.num#four').click();
            break;
        case '5':
            btncontainer.querySelector('.num#five').click();
            break;
        case '6':
            btncontainer.querySelector('.num#six').click();
            break;
        case '7':
            btncontainer.querySelector('.num#seven').click();
            break;
        case '8':
            btncontainer.querySelector('.num#eight').click();
            break;
        case '9':
            btncontainer.querySelector('.num#nine').click();
            break;
        case 'c':
            btncontainer.querySelector('.clr').click();
            break;
        case 'backspace':
            btncontainer.querySelector('.spl#bckspc').click();
            break;
        case '+':
            btncontainer.querySelector('.sym#add').click();
            break;
        case '-':
            btncontainer.querySelector('.sym#sub').click();
            break;
        case '*':
            btncontainer.querySelector('.sym#mul').click();
            break;
        case '/':
            btncontainer.querySelector('.sym#div').click();
            break;
        case '=':
            btncontainer.querySelector('.res#equals').click();
            break;
        case 'enter':
            btncontainer.querySelector('.res#equals').click();
            break;
        case '.':
            btncontainer.querySelector('.num#dot').click();
            break;
        default:
            break;
    }
    //document.querySelector('');
})

