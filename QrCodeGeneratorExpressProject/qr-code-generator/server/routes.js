const express = require('express');
const router = express.Router();

const  controller= require('./controller');

router.post('./generateQr',controller.generateQr);
 module.exports=router;

