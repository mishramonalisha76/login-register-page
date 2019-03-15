var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
	name: {type:String,required:true},
	email: {type:String,required:true,unique:true},
	password: {type:String,required:true},

});
var userModel = mongoose.model('details',userSchema);
module.exports = userModel;
