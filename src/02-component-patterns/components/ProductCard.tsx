import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces'
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
    onChange?: (args: onChangeArgs) => void
    onChangeCustomState?: (args: onChangeArgs) => void
    value?: number
}

/**
 * Card of Product
 * Compound Component Pattern
 * @param children?
 * @param product: Product
 * @param onChange? () => void
 */
export const ProductCard = ({
    children,
    className,
    style,
    product,
    onChange,
    onChangeCustomState,
    value,
}: Props) => {
    const { counter, increaseBy } = useProduct({ product, onChange, onChangeCustomState, value })

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
