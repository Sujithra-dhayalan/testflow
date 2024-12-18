require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { db } = require('./db/db')
db()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})