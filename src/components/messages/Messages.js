import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './message/Message'

import './Messages.css'

const Messages = ({ messages, name }) => ( 
  <form className="form">
    <ScrollToBottom className="messages">
      { messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>) }
    </ScrollToBottom>
  </form>
)

export default Messages