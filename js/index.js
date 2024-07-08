const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const signInBtn = document.getElementById("signInBtn")
let signUpArray;
let isValid = false
if (localStorage.getItem('user') == null) {
    signUpArray = [];
}
else {
    signUpArray = JSON.parse(localStorage.getItem('user'));
}

// console.log(signUpArray)
// ===>prevent defult to form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkValidity()
    // if (isValid === true) {
    //     checkValidity();
    // } else {
    //     document.getElementById("msg").innerHTML = `<p class="text-danger">All inputs is required</p>`;
    // }
});

function checkValidity(){
 const data = {
            signInEmail:signInEmail.value,
            signInPassword:signInPassword.value,
        }

        console.log(data)
        for (let i = 0; i <signUpArray.length; i++) {
            if (signUpArray[i].email.toLowerCase()==data.signInEmail.toLowerCase() &&signUpArray[i].password.toLowerCase() ==data.signInPassword.toLowerCase()) {
                location.href="./home.html";
                // document.getElementById("msg").innerHTML = `<p class="text-danger">corect</p>`;
            }else{
                document.getElementById("msg").innerHTML = `<p class="text-danger">incorrect email or password</p>`;
            }
        }
}

