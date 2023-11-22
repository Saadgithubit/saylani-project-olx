import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword ,  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore ,  collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDlg5H8sdJ0vn-NGrv9nG11iGYdZTlcyjE",
  authDomain: "olx-clone-9dbf6.firebaseapp.com",
  projectId: "olx-clone-9dbf6",
  storageBucket: "olx-clone-9dbf6.appspot.com",
  messagingSenderId: "419456133106",
  appId: "1:419456133106:web:264b67336374f3df13ed6b",
  measurementId: "G-FLTDFTPW78"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function register(user){
    const {fullName , email , password} = user

    createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          fullName,
          email,
          password
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode =>' , errorCode );
    console.log('errorMessage =>' , errorMessage );
  });

}


function logIn(user){
    const {email , password} = user

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode =>' , errorCode );
    console.log('errorMessage =>' , errorMessage );
  });
}

export {register , logIn}