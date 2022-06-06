import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { useEffect } from 'react'
import { getRedirectResult } from "firebase/auth"
import SignUpForm from "../../components/sign-up-form/SignUpComponent"

const SignIn=()=>{
useEffect( ()=>{
    async function getResponse () {
    const response= await getRedirectResult(auth);
      console.log(response.user)
      if(response.user){
       const userDocRef= await createUserDocumentFromAuth(response.user)
      }
    }
    getResponse()
}, [])

const logGoogleUser= async () => {
const response =await signInWithGooglePopup()
console.log(response)
console.log(response.user.uid)
const userDocRef = await createUserDocumentFromAuth(response.user);
}

// const logGoogleUserRedirect = async () => {
// const response = await signInWithGoogleRedirect()
// //cors? 
// console.log(response.user) 
// }

return(
<div>
    <h1>Sign In</h1>
    <button onClick={logGoogleUser}> Sign In with Google Popup </button>
    <button onClick={signInWithGoogleRedirect}> Sign In with Google redirect </button>
    <SignUpForm/>
</div>
   )
}


export default SignIn;