// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// import express from 'express';
// import bodyParser from body-parser

// const app = express();
// const PORT = 5000

// app.use(bodyParser.json());

// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));



import express from 'express';
import bodyParser from 'body-parser'



const app = express();
import userRoutes from './route/users.js'


const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));