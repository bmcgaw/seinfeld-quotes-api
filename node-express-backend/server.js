// Load HTTP module
const express = require('express')
const app = express();

const cors = require("cors");


app.use(cors());

import { getQuote } from './quotes'
const quote = getQuote();

app.get('/quotes', (req, res) => {

    return res.status(200).send({
        success: 'true',
        message: 'funny',
        data: quote
    })
});

app.listen(8000, () => {
    console.log('Testing123 on port 8000');
});