import React from 'react'
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser=async ()=>{
    const {user}=await signInWithGooglePopup()
    // console.log('res',response);
    const userDocRef= await createUserDocumentFromAuth(user);
  }
  return (
    <>
    
    <h1>SignIn Page</h1>
    <button onClick={logGoogleUser}>Sign in with Google</button>
    </>

  )
}

export default SignIn