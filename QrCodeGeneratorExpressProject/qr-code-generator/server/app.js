const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes')
const cors = require('cors')

const app = express();
const PORT = 9000;

app.use(json());
app.use(cors());
app.use(router());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
