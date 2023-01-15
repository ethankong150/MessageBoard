import React from 'react'
import { useState } from 'react'
import Message from '../Components/Message'
import Axios from 'axios'
import '../Stylesheets/Chat.css'

function Chat() {

    const [words, setWords] = useState([])

    Axios({
        method: "GET",
        url: "http://localhost:5000/message/viewMessages",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        setWords(res.data.messages)
      }).catch(error => {console.log(error)});

    return (
        <div className='align-center'>
            {words.map((word, index) => (
            <div className='space'>
                <Message word={word[0]} time={word[1]} />
            </div>
        ))}
        </div>
    )
}
export default Chat