const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db')

const app = express();
connectDB()
app.use(express.json())

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})