import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import Avater from "../images/avater.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlansButton from "../components/PlansButton";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={Avater} alt=""  />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans(Current Plan:premium)</h3>
              <h5>Renewal date 04/03/2021</h5>
              <PlansButton heading="Netflix Standard" quality="1080p" />
              <PlansButton heading="Netflix Basic" quality="720p" />
              <PlansButton heading="Netflix Premium" quality="4K+HDR" button_text="Current Package" className="bg_gray"/>
              <button onClick={()=>auth.signOut()}className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
