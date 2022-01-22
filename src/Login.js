import React, { useState } from 'react'
import { auth } from './firebase.js';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginHandler = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.id,
                displayName: name,
                photoUrl: profilePic
            }))
        })
        .catch((error) => alert(error.message));
    }



    const register = () => {
        if(!name) {
            return alert("Please enter a full name!");
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoUrl: profilePic,
        })
        })
        .then(() => {
            dispatch(login({
                email: auth.currentUser.email,
                uid: auth.currentUser.id,
                displayName: name,
                photoUrl: profilePic
            }))
        })
        .catch((error) => alert(error.message));
        }

    return (
        <div className="login">
            <img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG5.png" alt="" />

            <form>
                <input
                placeholder="Full name (required for register)"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <input
                placeholder="Profile pic URL (optional)"
                type="text"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                />

                <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={loginHandler}>
                Sign In
                </button>
            </form>

            <p>Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>


    )
}

export default Login
