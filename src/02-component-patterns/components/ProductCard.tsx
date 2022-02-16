import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

/**
 * Context to products
 */
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

/**
 * Card of Product
 * Compound Component Pattern
 * @param children?
 * @param product: Product
 */
export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>{children}</div>
        </Provider>
    )
}
