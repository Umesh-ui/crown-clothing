import { initializeApp } from "firebase/app"; //creates an instance of your app
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,                                 //getting/accessign the documet data
    setDoc                                  //setting the document data
} from 'firebase/firestore'
 // Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDizSMJTY_5NFRfPSj0ScZvwtZITxg7xFY",

  authDomain: "crwn-db-3323a.firebaseapp.com",

  projectId: "crwn-db-3323a",

  storageBucket: "crwn-db-3323a.appspot.com",

  messagingSenderId: "949951789479",

  appId: "1:949951789479:web:4016a643eefc7bd8909e82",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);


const provider=new GoogleAuthProvider();


provider.setCustomParameters({
    prompt:"select_account"
})


export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)

export const db=getFirestore();

export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid)

    console.log(userDocRef);

    const usersSnapshot=await getDoc(userDocRef)
    console.log(usersSnapshot.exists());                                //check if the user exists in database returns boolean


    // user does not exists

        if(!usersSnapshot.exists()){
            const {displayName,email}=userAuth;
            const createdAt=new Date();

            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt
                });
            }
            catch(error){
                console.log('error creating user',error.message);
            }
        }
        return userDocRef;
    // if user data exists

    // if user data exists

}