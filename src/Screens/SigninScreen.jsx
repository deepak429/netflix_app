import React, { useRef } from 'react'
import "./SigninScreen.css"
import {auth} from "../firebase"

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);


    }).catch((error) => {
      console.log(error);

    })
  }
  const signIn = (e) => {

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);


    }).catch((error) => {
      console.log(error);

    })
    e.preventDefault();
  }
  return (
    <div className='signupScreen'>
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email or Mobile number ' />
        <input ref={passwordRef} type="password" placeholder="Password" name="" id="" />
        <button onClick={signIn}>Sign In</button>
        <h4>New to Netflix? <span onClick={register}>  Sign up Now.</span></h4>
      </form>
    </div>
  )
}
