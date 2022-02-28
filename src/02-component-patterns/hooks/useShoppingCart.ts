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
            // ----------------   onChange ------------------ //
            /** onChange={onProductCountChange}
             * el contador lo lleva adelante esta misma función
             */
            // Busqueda ó asignación de un nuevo producto con el contador en 0
            const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 }

            // Incremento ó decremento del contador con la prop count
            productInCart.count += count

            // Si count es <= 0 se borra el producto del carrito
            if (productInCart.count <= 0) {
                const { [product.id]: objectToDelete, ...restObject } = prev
                return restObject
            }

            // De lo contrario se agrega o actualiza
            return {
                ...prev,
                [product.id]: productInCart,
            }
            // ----------------   onChangeCustomState ------------------ //
            /** onChangeCustomState={onProductCountChange}
             * el contador lo lleva adelante
             * el customHook
             */
            /* if (!count) {
                // const { [product.id]: objectToDelete, ...restObject } = prev
                delete prev[product.id]
                return { ...prev }
            }

            return {
                ...prev,
                [product.id]: { ...product, count },
            } */
        })
    }


    return {
        shoppingCart,
        onProductCountChange
    }
}
