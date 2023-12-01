import {addPostToDb, auth} from '../config.js'

const btn = document.getElementById('post-btn')


btn.addEventListener('click' , async()=> {
    const uid = await auth.currentUser.uid
    const inputElements = document.getElementsByTagName('input')
    const title = inputElements[0].value
    const description = inputElements[1].value
    const amount = inputElements[2].value
    const img = inputElements[3].files[0]
    const date = new Date()
    console.log(uid);

const add = {
    title,
    amount,
    description,
    img,
    uid,
    date
}

addPostToDb(add)

})

inCss()
function inCss(){

let inputElements = document.getElementsByTagName('input')
let img = inputElements[3]
let image = document.getElementById('image')
img.onchange = function(){
    image.src = URL.createObjectURL(img.files[0])
}
    
}






