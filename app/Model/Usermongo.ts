import Mongoose from '@ioc:Mongoose';
const USerSchema = new Mongoose.Schema({
    
    
    name: String,
    address: String,
    createdAt: String
    
});
const User = Mongoose.model('User', USerSchema);
User.createIndexes();
export default User;