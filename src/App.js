import React, { useState } from 'react'
import Display from './components/Display';
import { Form } from './components/Form'

const App = () => {
  const [currMessage, setCurrMessage] = useState("")
  const [messages, setMessages] = useState([]) 

  const handleNewMessage = (newMessage) =>{
    setCurrMessage(newMessage)
    setMessages([...messages, newMessage])
  }

  return (
    <div >
      {/* <ParentComponent /> */}
      <Form onNewMessage = {handleNewMessage}/>
      <Display currMessage={currMessage} messages={messages}/>


    </div>
  );
}

export default App
