import React from 'react'

const ChatMessage = ({message : {text, uid, photoURL, displayName}, auth}) => {
   const messageClass = uid === auth.currentUser.uid ? 'sent': 'received'

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} alt="img" />
            <p><span>{displayName}</span>{text}</p>
        </div>
    )
}

export default ChatMessage
