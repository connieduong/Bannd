const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  _by: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
  _business: {type:mongoose.Schema.Types.ObjectId, ref: 'Business'}
})



module.exports = mongoose.model('Comment', commentSchema)
