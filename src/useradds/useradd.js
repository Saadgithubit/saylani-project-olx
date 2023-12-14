import { getUserAdds, auth, onAuthStateChanged, deleteData, updateAd } from "../config.js"

onAuthStateChanged(auth, (user) => {
   if (user) {

      myAdds()


   }
});

async function myAdds() {

   const userId = await auth.currentUser.uid;
   const allAdds = await getUserAdds(userId)
   const allMyadsDetails = document.getElementById('all-myadds-code')
   const loader = document.getElementById('loader')
   loader.className = 'hide'
   allMyadsDetails.className = ''
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
      const editBtn = document.createElement('button')
      editBtn.innerHTML = 'Edit'
      const deleteBtn = document.createElement('button')
      deleteBtn.innerHTML = 'Delete'
      editBtn.onclick = () => {

         allMyadsDetails.className = 'hide'
         editAd(ad)
      }
      deleteBtn.onclick = async () => {
         loader.className = ''
         function refreshPage() {
            window.location = './useradd.html'
         }
         setTimeout(refreshPage, 3000)
         const id = ad.id
         await deleteData(id)
      }
      card.append(img)
      card.append(title)
      card.append(amount)
      card.append(editBtn)
      card.append(deleteBtn)
      container.append(card)
      //   console.log(ad);


   }


}



function editAd(ad) {
   const updateDiv = document.getElementById('update-ad')
   updateDiv.style.border = '1px solid black'
   const titleh4 = document.createElement('h4')
   titleh4.innerHTML = 'Title'
   const titleInp = document.createElement('input')
   titleInp.value = ad.title
   const amounth4 = document.createElement('h4')
   amounth4.innerHTML = 'Price'
   const amountInp = document.createElement('input')
   amountInp.value = ad.amount
   const discriptionh4 = document.createElement('h4')
   discriptionh4.innerHTML = 'Discription'
   const discriptionInp = document.createElement('input')
   discriptionInp.value = ad.description
   discriptionInp.className = 'discription-inp'
   const updateImg = document.createElement('img')
   updateImg.src = ad.img
   const updateBtn = document.createElement('button')
   updateBtn.innerHTML = 'Update'
   updateBtn.onclick = async () => {
      const id = ad.id
      const updateAdElements = {
         title: titleInp.value,
         amount: amountInp.value,
         description: discriptionInp.value
      }
      updateDiv.className = 'hide'
      await updateAd(updateAdElements,id)
      loader.className = ''
      function refreshPage() {
         window.location = './useradd.html'
      }
      setTimeout(refreshPage, 3000)
   }
   updateDiv.append(titleh4)
   updateDiv.append(titleInp)
   updateDiv.append(amounth4)
   updateDiv.append(amountInp)
   updateDiv.append(discriptionh4)
   updateDiv.append(discriptionInp)
   updateDiv.append(updateImg)
   updateDiv.append(updateBtn)
}

