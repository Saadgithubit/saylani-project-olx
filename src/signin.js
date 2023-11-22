import { logIn } from "./config.js";


 const btn = document.getElementById('signIn-btn')
 console.log(btn);

   btn.addEventListener('click' , ()=>{
    let email = document.getElementById('logInEmail').value
    let password = document.getElementById('logInPassword').value


    const user = {email,password}
    
    logIn(user)

})