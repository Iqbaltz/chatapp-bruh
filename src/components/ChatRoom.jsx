import React, {useState, useRef} from 'react'
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from './ChatMessage';
import firebase from 'firebase/app';

const ChatRoom = ({firestore , auth}) => {
    const dummy = useRef()

    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    
    const [messages] = useCollectionData(query, {idField: 'id'})
    
    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e)=>{
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')

        dummy.current.scrollIntoView({behavior: 'smooth'})
     }

    return ( 
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth}/>)}
                <div ref={dummy}></div>
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e)=> setFormValue(e.target.value)} />
                <button type="submit">🦅</button>
            </form>
        </>
    )
}

export default ChatRoom
