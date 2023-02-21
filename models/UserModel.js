const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserModel = new Schema({
  id: ObjectId,
  created_at: Date,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter a valid email address'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'password must be at least 7 chars']
  },
  blogs: {
    type: Schema.Types.ObjectId,
    ref: 'blog'
  }
})

UserModel.pre('save', async (next) => {
  const user = this
  const hash = await bcrypt.hash(this.password, 10)

  this.password = hash

  next()
})