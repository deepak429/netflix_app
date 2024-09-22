import { useState } from "react";
import "./Login.css"
import logo from "../images/logo.png"
import { IoIosArrowForward } from "react-icons/io";
import SignIn from './SigninScreen';
export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img  alt="login screen" className="loginScreen__logo" src={logo} />
        <button onClick={() => setSignIn(true)} className='loginScreen__button'>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (<SignIn />) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
              <div className='loginScreen__input'>
                <form >
                  <input type="email" name="email_id " placeholder='Enter Address' id="" />
                  <button onClick={() => setSignIn(true)} className='loginscreen_getStarted'>GET STARTED <IoIosArrowForward /> </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
