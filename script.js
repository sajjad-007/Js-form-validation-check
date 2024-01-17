let submitBtn = document.querySelector (".submitbtn");
let input1 = document.querySelector(".nameinput");
let input2 = document.querySelector(".emailinput");
let input3 = document.querySelector(".phoneinput");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError")
let phoneError = document.querySelector (".phoneError")
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let x ="lente"
console.log(x.length);

submitBtn.addEventListener("click",function () {

    // ===Name input
    if (input1.value == "" ) {
        nameError.innerHTML = "Please, enter your name"
        input1.style.border = "1px solid red"
    }else if(input1.value.length > "20"){
        nameError.innerHTML = "You can only use 20 characters"
        input1.style.border = "1px solid red"
    }else{
        nameError.innerHTML = "";
        input1.value = "";
        input1.style.border = "1px solid black"
    }

    // ===Email input

    if (input2.value == "") {
        emailError.innerHTML = "Please, enter your email"  
        input2.style.border = "1px solid red"
    }else if (!input2.value.match(emailRegex)){
        emailError.innerHTML = "Invaild, incorrect email name";
        input2.style.border = "1px solid red"
    }else{
        emailError.innerHTML = "";
        input2.value = "";
        input2.style.border = "1px solid black"
    }

    // ===Number input

    if (input3.value == "") {
        phoneError.innerHTML = "Please, enter your phone number";
        input3.style.border = "1px solid red";
    }else if(isNaN(input3.value)){
        phoneError.innerHTML = "Enter number" ;
        input3.style.border = "1px solid red";
    } else {
        phoneError.innerHTML = "";
        input3.value = "";
        input3.style.border = "1px solid black"
    }
})