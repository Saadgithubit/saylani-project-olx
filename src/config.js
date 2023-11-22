import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import{ getFirestore , collection,  addDoc, setDoc, getDocs, doc, getDoc} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
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
   const {fullName, email , password} = user

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
        password

      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    const user = userCredential.user;
    alert('Sign Up Successfull')
    window.location.href = './signin.html'
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
    console.log(user);
    alert('Log in Successfull')
    window.location.href = '../index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("errorcode =>" , errorCode);
    console.log("errorMessage =>" , errorMessage);
  });
 }

 async function addPostToDb(add){
  try {

    
    const storageRef = ref(storage, `${add.img.name}`);

    await uploadBytes(storageRef, add.img)

    const url = await getDownloadURL(storageRef)

    add.img = url
    // console.log(add);


    const docRef = await addDoc(collection(db, "adds"), add)
    alert('data added successful');
    
      changeLocation()
  
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



 export{
  register,
  logIn,
  auth,
  onAuthStateChanged,
  addPostToDb,
  getAllAdds,
  getSingleAdd,
  getUser
 }