import { register } from "./config/firebase.js";
// const usersData = JSON.parse(localStorage.getItem('users')) || []

const signUpBtn = document.getElementById('signUp-btn')
// console.log(signUpBtn);
signUpBtn.addEventListener('click' , ()=>{

    const inputField = document.getElementsByTagName('input')
    const fullName = inputField[0]
    const fatherName = inputField[1]
    const email = inputField[2]
    const password =inputField[3]
    const confirmPassword = inputField[4]

    if(!fullName.value || !fatherName.value || !email.value || !password.value || !confirmPassword.value){
        alert('Please Fill All Fields')
        return
    }

    if(password.value !== confirmPassword.value){
        alert('Both passwords are not same')
        return
    }

    if(fullName.value.length < 3){
        alert('Please Enter Your Name with minimum 3 letters')
        return
    }

    if(fatherName.value.length < 3){
        alert('Please Enter Your Fathername with minimum 3 letters')
        return
    }

    const user =
    {
        fullName: fullName.value,
        email: email.value,
        password: password.value
    }

    register(user)

    alert('Register Successfull')
    window.location.href = 'signin.html'



    //   usersData.push(user)
//     localStorage.setItem('users' , JSON.stringify(usersData))
//   console.log(name , fatherName , email , password , confirmPassword)



})


// function signIn(){

//     // const inputField = document.getElementsByTagName('input')
//     // const name = inputField[0]
//     // const fatherName = inputField[1]
//     // const email = inputField[2]
//     // const password =inputField[3]
//     // const confirmPassword = inputField[4]

//     // console.log(inputField.value)

//     const logInEmail = document.getElementById('logInEmail')
//     const logInPassword = document.getElementById('logInPassword')

//     if(!logInEmail.value ||  !logInPassword.value){
//         alert('Please Fill All The Fields')
//         return
//     }
    
//     // if(logInEmail.value !== email.value){
//     //     alert('Incorrect Email')
//     //     return
//     // }

//     // if(logInPassword.value !== password.value){
//     //     alert('Incorrect Password')
//     //     return
//     // }
//     // console.log(logInEmail , logInPassword)

//     window.location.href = '../index.html'
// }
