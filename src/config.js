import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import{ getFirestore , collection,  addDoc, deleteDoc, updateDoc, setDoc,query, where, getDocs, doc, getDoc,orderBy} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { getStorage , ref, uploadBytes, getDownloadURL,  }
 from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

 const firebaseConfig = {
  apiKey: "AIzaSyD0CbzxPtsrdDpY7Gfx5BSV0FRi1rmPxkY",
  authDomain: "assignment-project-olx.firebaseapp.com",
  projectId: "assignment-project-olx",
  storageBucket: "assignment-project-olx.appspot.com",
  messagingSenderId: "77707488787",
  appId: "1:77707488787:web:22477ac7202bb966a899e6",
  measurementId: "G-3XVL68Q8DK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



 function register(user){
   const {fullName, email , password, contact} = user

   const userCredential = createUserWithEmailAndPassword(auth, email, password)
  
  .then(async(userCredential) => {
    try {
      // const docRef = await addDoc(collection(db, "users"), {
      //   fullName, 
      //   email,
      //   password
      // });

      // console.log("userCredential-->",userCredential);
       await setDoc(doc(db, "users",userCredential.user.uid), {

        fullName, 
        email,
        password,
        contact

      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    const user = userCredential.user;
    const body = document.getElementsByTagName('body')
    for(var i = 0; i < body.length; i++){
      console.log(body[i]);
      body[i].style.opacity = '0.5'
     
    }
    Swal.fire({
      icon: "success",
      title: "Good job!",
      text: "Sign Up Succeessfull",
    });
    function goToSignIn(){
      window.location.href = './signin.html'
    }
    setTimeout(goToSignIn,3000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
    console.log("errorcode =>" , errorCode);
    console.log("errorMessage =>" , errorMessage);
  });
 }

 function logIn(user){
  const {email , password} = user

  
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    const body = document.getElementsByTagName('body')
    for(var i = 0; i < body.length; i++){
      console.log(body[i]);
      body[i].style.opacity = '0.5'
     
    }
    console.log(user);
    Swal.fire({
      icon: "success",
      title: "Good job!",
      text: "Log In Succeessfull",
    });
    function goToDashboard(){
    window.location.href = '../index.html'
  }
  setTimeout(goToDashboard,3000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("errorcode =>" , errorCode);
    console.log("errorMessage =>" , errorMessage);
  });
 }

 
function logout() {
  return signOut(auth)
}

 async function addPostToDb(add){
  try {

    
    const storageRef = ref(storage, `${add.img.name}`);

    await uploadBytes(storageRef, add.img)

    const url = await getDownloadURL(storageRef)

    add.img = url
    // console.log(add);


    const docRef = await addDoc(collection(db, "adds"), add)
    Swal.fire({
      title: "Good job!",
      text: "Your Post Add Successful!",
      icon: "success"
    });
    
      setTimeout(changeLocation,3000)
  
  } catch (e) {
    console.log("Error adding document: ", e);
  }
  
 }

  function changeLocation(){
      window.location = '../../index.html'
 }


 async function getAllAdds(){
  
  const querySnapshot = await getDocs(collection(db, "adds"));
   const adds = []
  querySnapshot.forEach((doc) => {

    const add = doc.data()
    add.id = doc.id
    adds.push(add)
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data() );
  // console.log(adds);
  
});

  return adds
 }


 async function getSingleAdd(addId){
  const docRef = doc(db, "adds",  addId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  // console.log("Document data:", docSnap.data());
  const add = docSnap.data()

  return add
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
 }

 async function getUser(uid) {
  console.log('uid', uid)
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      const user = docSnap.data()

      return user
  } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
  }
}

async function getUserAdds(uid){

  const adsRef = collection(db, "adds")
  const querySnapshot = await getDocs(query(adsRef, where("uid", "==", uid)))
  const adds = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const add = doc.data()
  const uid = doc.id
  add.id = uid
  adds.push(add)
  // console.log(doc.id, " => ", doc.data());
  
});
// console.log(adds);
return adds


}

async function sortAdds(sortedValue){
  const adsRef = collection(db, "adds")
  const querySnapshot = await getDocs(query(adsRef, orderBy('amount', sortedValue)))
  const allAdds = []
  querySnapshot.forEach((doc) => {
      const ad = doc.data()
      allAdds.id = doc.id

      allAdds.push(ad)
  });

  return allAdds
}


async function deleteData(id){
  await deleteDoc(doc(db, "adds", id));
}

async function updateAd(updateAdElements,id){
  const washingtonRef = doc(db, "adds", id);

await updateDoc(washingtonRef, updateAdElements);

}

 export{
  register,
  logIn,
  auth,
  onAuthStateChanged,
  addPostToDb,
  getAllAdds,
  getSingleAdd,
  getUser,
  getUserAdds,
  sortAdds,
  logout,
  deleteData,
  updateAd
 }