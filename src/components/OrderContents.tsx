import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"


type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}


export default function OrderContents({ order, dispatch }: OrderContentsProps) {
    return (
        <div>
            <h2 className=" font-black text-4xl">Consumo</h2>

            <div className=" space-y-5 mt-10">

                {order.map(item => (
                    <div className=" flex justify-between items-center border-t border-gray-400 py-5 last-of-type:border-b"
                        key={item.id}>
                        <div>
                            <p className="text-lg">
                                {item.name} -  {formatCurrency(item.price)}
                            </p>
                            <p className=" font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button
                            onClick={() => dispatch({ type: 'remove-item', payload: {id: item.id } })}
                            className="bg-red-500 h-8 w-8 rounded-full text-white font-black">
                            X
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
