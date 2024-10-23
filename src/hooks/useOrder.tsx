import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function UseOrder(){


    const [order, setOrder] = useState<OrderItem[]>([])


    const addItem = (item: MenuItem) =>{
        console.log(item)
    }


    return {
        addItem
    }
}