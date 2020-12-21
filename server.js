const {PORT} = process.env
const express = require('express')
const app = express()
const port = PORT || 5000


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.listen(port, () => { console.log(`Server listening on port ${port}..`) });