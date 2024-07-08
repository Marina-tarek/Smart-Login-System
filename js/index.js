const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const logInPage = document.getElementById("logInPage");
const signInBtn = document.getElementById("signInBtn")
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const homeContainer = document.getElementById("homeContainer")
const nav = document.querySelector("nav");


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
    if (signInEmail.value == "" && signInPassword.value==""){
             document.getElementById("notes").innerHTML = `<p class="text-danger">All inputs is required</p>`;
    }else if(signInEmail.value == "" || signInPassword.value==""){
        document.getElementById("notes").innerHTML = `<p class="text-danger">All inputs is required</p>`;
    }else{
        checkValidity()
    }
})

function checkValidity(){
 const data = {
            signInEmail:signInEmail.value,
            signInPassword:signInPassword.value,
        }

        console.log(data)
        for (let i = 0; i <signUpArray.length; i++) {
            if (signUpArray[i].email.toLowerCase()==data.signInEmail.toLowerCase() &&signUpArray[i].password.toLowerCase() ==data.signInPassword.toLowerCase()) {
                welcome(signUpArray[i].name)
            }else{
                document.getElementById("notes").innerHTML = `<p class="text-danger">incorrect email or password</p>`;
            }
        }
}
function welcome(name){
    homeContainer.classList.remove("d-none")
    nav.classList.remove("d-none")
    logInPage.classList.add("d-none")
     document.getElementById("yourName").innerText = `Welcome  ${name}`;
    }
