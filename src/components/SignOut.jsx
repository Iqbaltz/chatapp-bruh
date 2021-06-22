import React from 'react'

const SignOut = ({auth}) => {
    return auth.currentUser && (
        <div>
            <button onClick={()=> auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
