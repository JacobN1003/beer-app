const {PORT} = process.env
const express = require('express')
const app = express()
const port = PORT || 5000

app.listen(port, () => { console.log(`Server listening on port ${port}..`) });