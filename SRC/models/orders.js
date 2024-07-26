import {Schema, model} from "mongoose"

// Prototipo de una Orden de Compra (OC) en la DB

const orderSchema = new Schema ({

    cart: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'carts'
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
})

orderSchema.pre('save', () => {
    console.log("Guardaste una orden de compra!")
})

orderSchema.pre('find', async function(next){

    try {
        this.populate('cart')
        this.populate('user')
        next()
    }

    catch (error) {
        //
    }
})

// Exporto este prototipo en mi colección
export const orderModel = model ("orders", orderSchema)