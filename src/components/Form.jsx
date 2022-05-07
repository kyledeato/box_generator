import React from 'react'
import react, { useState } from 'react';

export const Form = (props) => {
    const [message, setMessage] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onNewMessage(message)
        setMessage("")
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="message" value={message}
                        onChange={e=>setMessage(e.target.value)}
                        placeholder="Please enter your message" />
                </p>
                <button type="submit"> Send</button>
            </form>


        </div>
    )
}
