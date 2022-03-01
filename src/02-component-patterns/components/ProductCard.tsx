import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties } from 'react'
import {
    ProductContextProps,
    Product,
    onChangeArgs,
    InitialValues,
    ProductCardHandlers,
} from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

/** Context to products */
export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

/** Interface to ProductCard */
export interface Props {
    // children?: ReactElement | JSX.Element[]
    children: (args: ProductCardHandlers) => JSX.Element
    product: Product
    className?: string
    style?: CSSProperties
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
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
    value,
    initialValues,
}: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
        product,
        onChange,
        value,
        initialValues,
    })

    return (
        <Provider value={{ counter, increaseBy, product, maxCount, isMaxCountReached }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    )
}
