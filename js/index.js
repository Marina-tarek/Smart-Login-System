const inputs = document.querySelectorAll("input");
const signUpBtn = document.getElementById("signUpBtn")
const formInput = document.querySelector('form')
let signUpArray;
let isValid = false
// ? =============> when start ===============>
if (localStorage.getItem('user') == null) {
    signUpArray= [];
}
else {
    signUpArray = JSON.parse(localStorage.getItem('user'));
}
// ? =============> Event ===============>
formInput.addEventListener('submit', function (e) {
    e.preventDefault();
    if (isValid === true) {
        setForm();
    } else {
        document.getElementById("msg").innerHTML = `<p class="text-danger">All inputs is required</p>`;
    }

})


inputs[0].addEventListener("input", function () {
    validationName()
})

inputs[1].addEventListener("input", function () {
    validationEmail()
})
inputs[2].addEventListener("input", function () {
    validationPassword()
})
formInput.addEventListener("input", function () {
    if (validationName() && validationEmail() && validationPassword()) {
        isValid = true
    } else {
        isValid = false
    }
})
// ? =============> function ===============>
// check email if used already
function checkEmail() {
    for (let i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email() == inputs[1].value()) {
            return false
        }
    }
}
function setForm() {
    const user = {
        name: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
    }
    console.log(user);
    if (checkEmail === false) {
        document.getElementById("msg").innerHTML = `<p class="text-danger">email already exists</p>`
    } else {
        document.getElementById("msg").innerHTML = `<p class="text-success">Success</p>`
        signUpArray.push(user);
        localStorage.setItem('user', JSON.stringify(signUpArray));
        console.log(signUpArray)
        location.href="./index.html";
    }


}

// ابعت الداتا للباك 
// fetch method get
// function registerForm() {
// let data ={
//     code:inputs[0].value,
//     email:inputs[1].value,
//     password:inputs[2].value

// }

// }
// https://ecommerce.routemisr.com/api/v1/auth/signup    https://movies-api.routemisr.com/signup
//     const api=await fetch(`https://ecommerce.routemisr.com/api`,{
//       method:'post',
//       body:JSON.stringify(userData),
//       headers:{
//        'Accept': 'application/json',
//       'Content-Type': 'application/json'
//       }  
//     })

//     const response=await api.json();
//     console.log(response);

// }
// ? =============> validation ===============>

function validationName() {
    const regexStyle = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if (regexStyle.test(inputs[0].value)) {
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
    const regexStyle = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (regexStyle.test(inputs[1].value)) {
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
    if (regexStyle.test(inputs[2].value)) {
        inputs[2].classList.add("is-valid")
        inputs[2].classList.remove("is-invalid")
        return true
    } else {
        inputs[2].classList.add("is-invalid")
        inputs[2].classList.remove("is-valid")
        return false
    }
}

// ======> sign In




// =======>HOME PAGE