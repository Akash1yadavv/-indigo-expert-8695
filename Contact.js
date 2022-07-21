let contactDataArr = JSON.parse(localStorage.getItem("Contact_Data")) || []
let form = document.querySelector("form")
document.querySelector("#btn").addEventListener("click", Contactfun)
function Contactfun() {
    event.preventDefault()
    let obj = {
        firstName: form.name.value,
        lastName: form.lastname.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
    }
    contactDataArr.push(obj)
    if (obj.firstName == "" || obj.lastName == "" || obj.email == "" || obj.phone == "" || obj.message == "") {
        alert("fill entire form")
    } else {
        localStorage.setItem("Contact_Data", JSON.stringify(contactDataArr))
        alert("Thank You! Your form has been submitted.")
    }

}
