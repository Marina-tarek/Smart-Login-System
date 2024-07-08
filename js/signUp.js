const signUpName = document.getElementById("signUpName")
const signUpEmail = document.getElementById("signUpEmail")
const signUpPassword = document.getElementById("signUpPassword")
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let signUpArray;
let isValid = false
if (localStorage.getItem('user') == null) {
    signUpArray = [];
}
else {
    signUpArray = JSON.parse(localStorage.getItem('user'));
}
// ===>prevent defult to form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (isValid === true) {
        setForm();
    } else {
        document.getElementById("msg").innerHTML = `<p class="text-danger">All inputs is required</p>`;
    }
});

form.addEventListener("input", function () {
    if (validationName() && validationEmail() && validationPassword()) {
        isValid = true
    } else {
        isValid = false
    }
})



// =============> validation ===============>
signUpName.addEventListener("input", function () {
    validationName()
})

signUpEmail.addEventListener("input", function () {
    validationEmail()
})
signUpPassword.addEventListener("input", function () {
    validationPassword()
})
function validationName() {
    const regexStyle = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if (regexStyle.test(inputs[0].value.toLowerCase())) {
        inputs[0].classList.add("is-valid")
        inputs[0].classList.remove("is-invalid")
        return true
    } else {

        inputs[0].classList.add("is-invalid")
        inputs[0].classList.remove("is-valid")
        return false
    }
}
function validationEmail() {
    // /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const regexStyle = /^[a-zA-Z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regexStyle.test(inputs[1].value.toLowerCase())) {
        inputs[1].classList.add("is-valid")
        inputs[1].classList.remove("is-invalid")
        return true
    } else {
        inputs[1].classList.add("is-invalid")
        inputs[1].classList.remove("is-valid")
        return false
    }
}
function validationPassword() {
    const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regexStyle.test(inputs[2].value.toLowerCase())) {
        inputs[2].classList.add("is-valid")
        inputs[2].classList.remove("is-invalid")
        return true
    } else {
        inputs[2].classList.add("is-invalid")
        inputs[2].classList.remove("is-valid")
        return false
    }
}



// =====> set form and storage data
function setForm() {
    const user = {
        name: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
    }
    console.log(user);
    if (checkEmail() == false) {
        document.getElementById("msg").innerHTML = `<p class="text-danger">email already exists</p>`

    } else {
        document.getElementById("msg").innerHTML = `<p class="text-success">Success</p>`
        signUpArray.push(user);
        localStorage.setItem('user', JSON.stringify(signUpArray));
        console.log(signUpArray)
    }
}

//====> check email if used already
function checkEmail() {
    for (let i = 0; i <signUpArray.length; i++) {
        if (signUpArray[i].email == signUpEmail.value) {
            return false
        }
    }
}