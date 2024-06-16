import mongoose from 'mongoose';

const orederItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    orederitems:{
        type: [orederItemSchema]
    }
}, {timestamps: true});


export const Order = mongoose.model('Order', orderSchema)