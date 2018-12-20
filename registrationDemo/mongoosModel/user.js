//this is schema of registration form 
//which cointain firstName,lastName,qualification,stream,dateOfBirth
//mail and contactNumber



var schema=new schema({
firstName:String,
lastName:String,
qalification:String,
stream:String,
dateOfBirth:{type:Date},
email:{type:String ,uniqiue:true ,  validate: validators.isEmail()},
contactNumber:Number,




})