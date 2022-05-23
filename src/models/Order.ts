import {model,Schema} from "mongoose"

// sujeta a cambios de acuerdo a la info que llega desde PayPal.


const OrderSchema=new Schema({

    user : {
         type : Schema.Types.ObjectId,
         ref : 'User'
    },

    products : [],
    
    adress : {
        type : String,
    },

    isPaid : {
        type : Boolean,
        default : false
    },

    paymentId: { 
        type : String,
    },

    totalPrice : {
        type : Number,
    }


},
 {
     timestamps : true
 })

const Order=model("Order",OrderSchema)

export default Order;