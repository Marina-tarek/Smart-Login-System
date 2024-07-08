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
    if (isValid === true) {
        setForm();
    } else {
        document.getElementById("msg").innerHTML = `<p class="text-danger">All inputs is required</p>`;
    }
});


// checkValidity()
// try {
//     if (signInEmail == "" && signInPassword=="") throw `<p class="text-danger">All inputs is required</p>`
 
//     else {
//         checkWeather(searchLocation.value);
//         anotherDays(searchLocation.value);
//     }
// }
// catch (err) {
//     document.getElementById("msg").innerHTML =  err;
// }

// console.log("hii")
// }
// function checkValidity(){
// signUpArray = JSON.parse(localStorage.getItem('user'))
// var loo={
//     email1:signInEmail.value,
//     password1:signInPassword.value
// }
// for(let i=0;i<signUpArray.length;i++){
// if(signUpArray[i].email==loo.email1 &&signUpArray[i].password==loo.password1){
//     document.getElementById("msg").innerHTML = `<p class="text-success">Success</p>`   
// }else{
//      document.getElementById("msg").innerHTML = `<p class="text-danger">incorrect email or password</p>`
// }
// }
// }