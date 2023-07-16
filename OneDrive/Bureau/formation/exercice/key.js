// const form = document.getElementById("form");
// const form =document.getElementsByClassName('form');
// const form =document.getElementsByName('');
// ? const form =document.querySelector('.test'); awel ellement 3ando isem class
// ! form =document.parentElement(''); tjib div parent
// * form= document.childNodes('');

const form =document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const message=document.getElementById('message');
let etat=true;
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    checkInputs();
    if (etat){
        message.innerText="Account created successfully";
        setTimeout(()=>{message.innerText=""},3000);
        form.reset();
    }
})

function checkInputs(){
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const password2value=password2.value.trim();

if(usernamevalue ===''){
// !ERROR EN USERNAME
setErrorFor(username,"user is empty");
}
else
{
    // * SUCCESS EN USERNAME
    setSuccessFor(username);
}
    if(!isEmail(emailvalue))
    {
        // !ERROR EN EMAIL
        setErrorFor(email);
    }
    else 
    {
        // * SUCCESS EN EMAIL
        setSuccessFor(email);
    }
    if(passwordvalue ===''){
        setErrorFor(password);
    }
    else{
        setSuccessFor(password);
    }
    if(password2value===''){
        setErrorFor(password2);
    }
    else if(password2value!==passwordvalue){
        setErrorFor(password2,"password is not matching");
    }
    else{
        setSuccessFor(password2);
    }



}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setSuccessFor(input){
    const fromcontrol=input.parentElement;
   fromcontrol.className='form-control success';
}
function setErrorFor(input,message){
    const fromcontrol=input.parentElement;
    fromcontrol.className='form-control error';
    const small=fromcontrol.querySelector('small');
    small.innerText=message;
 }