import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { login, logout } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js';
import { useDispatch } from "react-redux";
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Login from  './Login.js';
import "./App.css";


function App() {
  const selectUser = (state) => state.user.user;

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in
        dispatch(login({
                email: authUser.email,
                uid: authUser.uid,
                displayName: authUser.name,
                photoUrl: authUser.profilePic
        }));
        
      } else {
        // User is signed out
        dispatch(logout());
      }
    })

  }, [dispatch]);

  return (
    <div className="app">
        <Header />  
        {!user ? (<Login />): (<div className="app__body"><Sidebar /><Feed /></div>)}
        
    </div>
  );
}

export default App;
