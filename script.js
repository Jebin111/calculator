let inputBox=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button')

let string=''

buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText=='='){
            try{
                string=String(eval(string))
                inputBox.value=string;
            }
            catch(error){
                inputBox.value='ERROR';
                string='';
            }
        }
        else if(b.target.innerText=='AC'){
            string=''
            inputBox.value=string;
        }
        else if(b.target.innerText=='DE'){
            string=string.substring(0,string.length-1)
            inputBox.value=string;
        }
        else if(b.target.id=='plusMinus'){
            string=String(-eval(string))
            inputBox.value=string;
        }
        else if(((b.target.innerText=='0')||(b.target.innerText=='00'))&&(string=='')||string=='0'||string=='00'){
            string=b.target.innerText
            inputBox.value=string;
        }
        else{
            if(string=='NaN'||string=='undefined'){
                string=''
            }
            string+=b.target.innerText
            inputBox.value=string;
        }
    })
})