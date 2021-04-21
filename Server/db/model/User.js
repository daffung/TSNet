const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    SpeacialActionsCategory_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'SpeacialActionsCategory'
      },
    FavoritesCategory_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'FavoritesCategory'
      },
    Pages_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Pages'
      }    
})
module.exports = mongoose.model('User',UserSchema)