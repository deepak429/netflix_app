import React, { useEffect } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from './Screens/LoginScreen.jsx';
import { auth } from "./firebase.js";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice.js";
import ProfileScreen from './Screens/ProfileScreen.jsx';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); // Change this to simulate user login status

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unSubscribe;
  }, [dispatch]); // Added dependency array with dispatch

  // Define routes
  const routes = user ? [
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/profile",
      element: <ProfileScreen/>
    },
  ] : [
    {
      path: "*",
      element: <LoginScreen />,
    }
  ];

  // Create router with conditional routes
  const router = createBrowserRouter(routes);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
