import{getUserAdds,auth, onAuthStateChanged} from "../config.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
      
       myAdds()

 
    }
});

     async function myAdds(){
        const userId = await auth.currentUser.uid;
        const allAdds = await getUserAdds(userId)
        
        console.log(userId);
        

       console.log(alladds);
       }

//        const container = document.getElementById('conatiner')

//   for(var i = 0 ; i < allAdds.length; i++){
//   const ad =  allAdds[i] 

//   const card = document.createElement('div')
//   card.className = 'card-div'
//   card.addEventListener('click' , ()=>{
//     window.location.href = './src/details/details.html?adId=' + ad.id
//   })

//   const img = document.createElement('img')
//   img.src = ad.img
//   const line = document.createElement('br')
//   const title = document.createElement('h4')
//   title.innerHTML = ad.title
//   const amount = document.createElement('h5')
//   amount.innerHTML = ad.amount
//   card.append(img)
//   card.append(line)
//   card.append(amount)
//   card.append(title)
//   container.append(card)
//   console.log(ad);

  
// }

    
     


