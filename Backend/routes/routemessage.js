"use strict";
const express = require("express");
let router = express.Router();


router
.route("/submit")
.post((req, res) => {
    res.header('Accnoess-Control-Allow-Origin', '*')
    console.log(req.body)
    const newMessage = req.body
    messages.unshift(newMessage)
    console.log(messages)
    res.send({message: "Backend: received new message"})});
 
    
const messages = []

router
.route("/viewMessages")
.get((req, res) => {
    res.send({ messages: messages });
});

module.exports = router