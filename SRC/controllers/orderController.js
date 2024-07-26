import { orderModel } from "../models/orders.js"

const readOrders = async(product_code) => {
    const my_orders = await orderModel.find().lean()
    return my_orders
}

export default readOrders
