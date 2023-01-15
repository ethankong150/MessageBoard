import Axios from 'axios'
import { useState } from 'react'
import '../Stylesheets/Input.css'

function MessageInput() {

    const [input, setInput] = useState({
        message: ''
      });

    const handleForm = e => {
        setInput({[e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const data = [input.message, new Date()]
        console.log('Time:' +  new Date())
        console.log(data)
        Axios.post('http://localhost:5000/message/submit', data, {
            headers: {
                "Content-Type": "application/json"
              }
        })
            .then(response => 
                {
                console.log(response)
            })
            .catch(error => {console.log(error)})
        } 

    return (
            <div className='input' id='my_form'>
                <form onSubmit={handleSubmit}> 
                    <input
                    className='input' 
                    type = "text"
                    name="message" 
                    onChange={handleForm}
                    minLength="1"
                    maxLength="128"
                    required
                    />
                    <button className='submit' type = "submit">
                    Send
                    </button>
                </form>
            </div>
        )
}

export default MessageInput 