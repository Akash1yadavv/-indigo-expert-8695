let SignUpData=JSON.parse(localStorage.getItem("SignUpData")) || []

let SignInDataArr = JSON.parse(localStorage.getItem("SignInData")) || []
let form=document.querySelector("form")
form.addEventListener("submit", SignIn)
function SignIn() {
    event.preventDefault()
    let obj = {
        email: form.email.value,
        password: form.pass.value,
    }
    SignInDataArr.push(obj)
    if(obj.email==""||obj.password==""){
        alert("User doesn't Exist")
    }else{
        let flag=false
        SignUpData.forEach(function(ele){
            if(obj.email==ele.email && obj.password==ele.password){
                alert("Successfully Sign In")
                window.location.href="index.html"
                localStorage.setItem("UserName", ele.name)
                flag=true
            }
        })
        if(flag == false){
            alert("User doesn't Exist")
        }
    }
    
}