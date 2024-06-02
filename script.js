const form = document.getElementById("form")
const email = document.getElementById("email")
const button = document.getElementById("button")

form.addEventListener('submit', (e)=>{

    e.preventDefault()

    Validate()
}

)

function Validate(){

const emailValue = email.value.trim()

if (emailValue===""){
    setErrorFor(email,'Email cannot be empty')

}else if (!isEmail(emailValue)){

    setErrorFor(email,'Invalid Email')
}else{
    setSuccessFor(email)

}

}
function setErrorFor(){

}

function setSuccessFor(){
    
}

function isEmail(){
    /*RegExp goes here*/
}