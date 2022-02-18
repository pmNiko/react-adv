import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { ProductContextProps, Product } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

/** Context to products */
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

/** Interface to ProductCard */
export interface Props {
    children?: ReactElement | JSX.Element[]
    product: Product
    className?: string
    style?: CSSProperties
}

/**
 * Card of Product
 * Compound Component Pattern
 * @param children?
 * @param product: Product
 */
export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
