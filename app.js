import {auth , onAuthStateChanged, getUser} from './src/config.js'
import { getAllAdds } from "./src/config.js"

function changeLocation(){
const logInBtn = document.getElementById('logIn-button')
const sellBtn = document.getElementById('sell-btn')
logInBtn.addEventListener('click' , ()=>{
  window.location = './src/signin.html'
})

sellBtn.addEventListener('click' , ()=>{
  window.location = './src/AddsPosts/post.html'
})

}

changeLocation()





onAuthStateChanged(auth, async (user) => {
  if (user) {
    
    const uid = user.uid;
    const userUid = await getUser(uid)
    // console.log(user);
    // console.log(uid);
    console.log('userUid ->' , userUid.fullName);
    const emailElement = document.getElementById('userId')
    emailElement.innerHTML = `Welcome ${userUid.fullName}`
    // console.log(emailElement);
    renderAdds()
    
  }
});




async function renderAdds(){
  
  const allAdds = await getAllAdds()
  
  // const container = document.getElementById('container')
  // console.log(container);
  // console.log(allAdds);
  const container = document.getElementById('allProducts')

  for(var i = 0 ; i < allAdds.length; i++){
  const ad =  allAdds[i] 

  const card = document.createElement('div')
  card.className = 'card-div'
  card.addEventListener('click' , ()=>{
    window.location.href = './src/details/details.html?adId=' + ad.id
  })

  const img = document.createElement('img')
  img.src = ad.img
  const line = document.createElement('br')
  const title = document.createElement('h4')
  title.innerHTML = ad.title
  const amount = document.createElement('h5')
  amount.innerHTML = ad.amount
  card.append(img)
  card.append(line)
  card.append(amount)
  card.append(title)
  container.append(card)
  console.log(ad);

  
}

}
// console.log(auth,getUser);

// getData()

// function getData(){
  
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(res => {
//   const products = res.products
//   const container = document.getElementById('allProducts')

//   console.log(products);
//   for (let i = 0; i < products.length; i++){
//     const card = document.createElement('div')
//     card.className = 'card-div'
//     card.onclick = function (){
//       window.location.href = './src/productsdata/products.html?productId=' + products[i].id
//     }
//     const images = document.createElement('img')
//     images.src = products[i].thumbnail
//     const line = document.createElement('br')
//     const price = document.createElement('h5')
//     price.innerHTML = 'Price: ' + products[i].price + '$'
//     const title = document.createElement('h4')
//     title.innerHTML = products[i].title
//     const description = document.createElement('p')
//     description.innerHTML = products[i].description
//     card.append(images)
//     card.append(line)
//     card.append(line)
//     card.append(price)
//     card.append(title)
//     card.append(description)
//     container.append(card)
    
//   }
// });
// }

// const user = JSON.parse(sessionStorage.getItem('user'))
// const logInBtn = document.getElementById('logIn-button')
// if(user){
// logInBtn.innerHTML = user.fullName
// // logInBtn.className = ''
// }  

// function gotoPosts(e){
//     window.location.href = './src/AddsPosts/post.html'
// }



// window.onchangeLocation = function (){
  
  
//   window.location.href = './src/signin.html' 

// }


