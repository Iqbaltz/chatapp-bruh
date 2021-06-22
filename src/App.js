import React from 'react'
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut'

import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyALTOQEdaFzoeOP-b55-lBq5qUov29sNQA",
    authDomain: "chatapp-bruh.firebaseapp.com",
    projectId: "chatapp-bruh",
    storageBucket: "chatapp-bruh.appspot.com",
    messagingSenderId: "722980193719",
    appId: "1:722980193719:web:5f279da52cc8642dc71432",
    measurementId: "G-HZ0ZLXPLCW"
  });
}else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header>
        <h1>ChatApp💬</h1>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore} /> : <SignIn auth={auth} /> }
      </section>
    </div>
  );
}



export default App;
