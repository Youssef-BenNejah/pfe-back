import mongoose, { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const {ObjectId} = mongoose.Schema;


const invoiceSchema =  new mongoose.Schema(
    {
    Num_fact: {type:String,unique: true},
    Date_fact: String,
    Date_paie: String,
    Type_paie: String,
    Etat_paie :String,
    // postedBy: {
    //     type: ObjectId,
    //     ref: "user"
    // },
    // invoices:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],


    
 
},
);

autoIncrement.initialize(mongoose.connection);
invoiceSchema.plugin(autoIncrement.plugin, 'invoice');
const postInvoice = mongoose.model('invoice', invoiceSchema);


export default postInvoice;