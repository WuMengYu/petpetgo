var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ShopSchema = new Schema({
  name: String
})

ShopSchema.index({ name: 'text' })
module.exports = mongoose.model('Shop',ShopSchema)
