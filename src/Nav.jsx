import React, { useState,useEffect } from 'react'
import "./Nav.css"
import logo from "./images/logo.png"
import Avater from "./images/avater.jpg"
function Nav() {

  const [show, handleShow]=useState(false);

  const transitionNavBar = ()=>{
    if(window.scrollY>100){
      handleShow(true);

    }else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=> window.removeEventListener("scroll",transitionNavBar);
  },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
      <img className="nav__logo" src={logo} alt="logo" />
      <img className="nav__avater" src={Avater} alt="" />
      </div>
    </div>
  )
}

export default Nav