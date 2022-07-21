
let Arr = JSON.parse(localStorage.getItem("SignUpData")) || []  //this line is mandatory because this our loop running same data store in obj
let SignUpDataArr = JSON.parse(localStorage.getItem("SignUpData")) || []


let form = document.querySelector("form")
form.addEventListener("submit", SignUp)
function SignUp() {
    event.preventDefault()
    let obj = {
        name: form.name.value,
        mobile: form.mbl.value,
        email: form.email.value,
        password: form.pass.value,
        confirmPass: form.conPass.value,
    }

    SignUpDataArr.push(obj)
    if (obj.name == "" || obj.mobile == "" || obj.email == "" || obj.password == "" || obj.confirmPass == "") {
        alert("fill the all required input")
    } else {
        if (obj.password !== obj.confirmPass) {
            alert("Password and Confirm password are not Same")
        } else {
            if (obj.password.length < 6) {
                alert("Minimum Password length should be 6 Digit")
            } else {
                let flag = false;
                Arr.forEach(function (ele) {
                    if (obj.email == ele.email || obj.mobile == ele.mobile) {
                        alert("User Already Exist")
                        flag = true;
                        return
                    }
                })
                if (flag == false) {
                    alert("Account created successfully")
                    localStorage.setItem("SignUpData", JSON.stringify(SignUpDataArr))
                }
            }
        }
    }
}