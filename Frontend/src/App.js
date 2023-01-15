
import React from "react";
import Axios from "axios";
import Input from './Components/Input'
import Chat from './Components/Chat'

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  }).catch(error => {console.log(error)});

  return (
    <div>
        <Input/>
        <Chat/>
    </div>
  );
}

export default App;