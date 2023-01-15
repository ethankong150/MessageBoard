const express = require("express"),
app = express(),
port = process.env.PORT || 5000,
cors = require("cors");
var bodyParser = require('body-parser')
const message = require('./routes/routemessage')

app.use(cors());
app.use(bodyParser.json())

app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
    res.send({ message: "We did it!" });
});

app.use("/message", message)
