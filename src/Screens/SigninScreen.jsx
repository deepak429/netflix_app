import React, { useRef, useState } from 'react';
import './SigninScreen.css';
import { auth } from '../firebase'; // Import your firebase configuration

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up

  // Register (Sign Up)
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log('User registered:', authUser);
    }).catch((error) => {
      console.log('Error during registration:', error);
    });
  };

  // Sign In
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log('User signed in:', authUser);
    }).catch((error) => {
      console.log('Error during sign-in:', error);
    });
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <input ref={emailRef} type="email" placeholder='Email or Mobile number' />
        <input ref={passwordRef} type="password" placeholder="Password" />
        
        {/* Conditional button text and action based on isSignUp state */}
        <button onClick={isSignUp ? register : signIn}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        {/* Toggle between Sign In and Sign Up */}
        <h4>
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsSignUp(false)}>Sign In now.</span>
            </>
          ) : (
            <>
              New to Netflix?{' '}
              <span onClick={() => setIsSignUp(true)}>Sign Up now.</span>
            </>
          )}
        </h4>
      </form>
    </div>
  );
}
