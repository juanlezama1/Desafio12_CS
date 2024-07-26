import { Router } from "express"
import readOrders from "../controllers/orderController.js"

const ordersRouter = Router ()

// LECTURA DE TODAS LAS ÓRDENES DE COMPRA
ordersRouter.get('/', async (req, res) => {

    try {
        const orders = await readOrders()
        res.status(200).send(orders)
    }

    catch (error)
 
    {
        res.status(500).send("Error al leer las órdenes de compra: ", error)
    }
})

export default ordersRouter