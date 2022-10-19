const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subject: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'SubjectModel',
  },
})

module.exports = mongoose.model('Admin', AdminSchema)
