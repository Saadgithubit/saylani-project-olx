import { logIn } from "./config/firebase.js"

// const usersData = JSON.parse(localStorage.getItem('users')) || []
// console.log(usersData)

const signInBtn = document.getElementById('signIn-btn')
signInBtn.addEventListener('click' , ()=>{


    const inputField = document.getElementsByTagName('input')
    const email = inputField[0]
    const password = inputField[1]

    const user = {email , password}

    logIn(user)
    
    // if(user){

    //     alert('Log in Successfull')
    //     window.location.href = '../index.html'
    // }
    

    // var found = false
    // for(let i = 0; i < usersData.length; i++){
    //     if(usersData[i].email == email.value && usersData[i].password == password.value){
    //         found = true
    //         alert('log in succesfull')
    //         window.location.href = '../index.html'
    //         sessionStorage.setItem('user' , JSON.stringify(usersData[i]))
    //         break
    //     }

    //     if(!found){
    //         alert('invalid email or password')
    //         break
            
    //     }
    //     if(usersData.length == 0 ){
    //         alert('Please Sign Up First')
    //         break
    //     }
    // }

    // console.log(inputField)
// }
})
