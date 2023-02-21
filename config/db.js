const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGODB_URL)

  mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb successfully');
  })

  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to Mongodb', err);
  })
}

module.exports = connectDB