import { register } from './config.js'


const signUpBtn = document.getElementById('signUp-btn')
// console.log(signUpBtn);
signUpBtn.addEventListener('click' , ()=> {
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

  const user = {
    fullName: fullName.value,
    email: email.value,
    password: password.value
  }


  register(user)
    
  })
  