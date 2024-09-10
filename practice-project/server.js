const express = require('express')
const app = express()
const bodyparser=require("body-parser")
const PORT = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// addding body parser for json
app.use(bodyparser.json())
// this  is my dummy api
app.get("/api/v1", (req, res) => {
  res.json(
    {
      message: "hello from the API "
    }
  )
})

app.listen(PORT,( ) =>console.log('server running on port: http://localhost:${PORT}'));