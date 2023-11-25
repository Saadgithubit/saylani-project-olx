import { getUserAdds, auth, onAuthStateChanged } from "../config.js"

onAuthStateChanged(auth, (user) => {
   if (user) {

      myAdds()


   }
});

async function myAdds() {

   const userId = await auth.currentUser.uid;
   const allAdds = await getUserAdds(userId)
   const loader = document.getElementById('loader')
   loader.className = 'hide'
   const container = document.getElementById('container')
   console.log(allAdds);

   for (var i = 0; i < allAdds.length; i++) {
      const ad = allAdds[i]

      const card = document.createElement('div')
      card.className = 'card-div'

      const img = document.createElement('img')
      img.src = ad.img
      const title = document.createElement('h4')
      title.innerHTML = ad.title
      const amount = document.createElement('h5')
      amount.innerHTML = `Rs ${ad.amount}`
      card.append(img)
      card.append(title)
      card.append(amount)
      container.append(card)
      //   console.log(ad);


   }

}



