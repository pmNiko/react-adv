import { useState } from "react"
import { onChangeArgs, Product } from "../interfaces/interfaces"


interface ProductInCart extends Product {
    count: number
}

interface StateProductInCart {
    [key: string]: ProductInCart
}


export const useShoppingCart = () => {
    /** Este state tendra un manejo de id de [idProducto: string] : cantidad  */
    // const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    const [shoppingCart, setShoppingCart] = useState<StateProductInCart>({})

    /**Esta fn se pasa como referencia de la prop onChange de ProductCard */
    const onProductCountChange = ({ product, count }: onChangeArgs) => {
        setShoppingCart((prev) => {
            /** onChangeCustomState={onProductCountChange}
             * el contador lo lleva adelante el customHook
             */
            if (!count) {
                // const { [product.id]: objectToDelete, ...restObject } = prev
                delete prev[product.id]
                return { ...prev }
            }

            return {
                ...prev,
                [product.id]: { ...product, count },
            }
        })
    }


    return {
        shoppingCart,
        onProductCountChange
    }
}
