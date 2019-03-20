import mongoose from 'moogoose'
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

export default mongoose.model('User', UserSchema)
