
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, auth } from "../../utils/firebase/firebase.utils"

const defaultFormFields={
displayName: "",
email: "", 
password: "",
confirmedPassword: ""
}


const SignUpForm=()=>{
const [formFields, setFormFields]=useState(defaultFormFields);
const { displayName, email, password, confirmedPassword } = formFields;

const handleChange=(event)=>{
 const {name, value} = event.target;
 setFormFields({...formFields, [name]: value});
}

const handleSubmit= async (event)=>{
    event.preventDefault();
//password match with confirmed password 
if(password!==confirmedPassword) { 
   alert("password doesn't match")
   return; 
} 

try {
const result = await createAuthUserWithEmailAndPassword ( email, password )
  console.log(result)

 } catch (err){
  console.log(err, "error")
 }
};


return ( 
     <div>
     <h1>Sign In Form </h1>
      <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" onChange={handleChange} name="displayName" value={displayName} required/>

          <label>Email</label>
          <input type="email"onChange={handleChange} name="email" value={email} required/>

          <label>Password</label>
          <input type="password"  onChange={handleChange} name="password" value={password} required/>

          <label>Confirm Password</label>
          <input type="password" onChange={handleChange} name="confirmedPassword" value={confirmedPassword} required/>

         <button type="submit"> Sign Up </button>

      </form>
     </div>
 
    )
}

export default SignUpForm;