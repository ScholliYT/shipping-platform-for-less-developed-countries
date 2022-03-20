const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

// Configure express server
const app = express()
const port = 3000

// create application/json parser
const jsonParser = bodyParser.json()

app.use(cors())
app.use('/', express.static(path.join(__dirname, 'static')));

// root endpoint
app.get('/api', (req, res) => {
  res.json({"message": "This is the backend API"})
})

app.post('/api/login', jsonParser, (req, res) => {
    const bodyPayload = req.body;
    console.log("Login request with data: " + JSON.stringify(bodyPayload));
    const email = bodyPayload.email;
    const password = bodyPayload.password; //asdf

    // TODO: validate email and password
    // for now only accept the email "test"
    let data = {"loggedIn": email == "test"}
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('Press Ctrl+C to quit.');
})
