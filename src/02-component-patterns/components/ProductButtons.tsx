import { CSSProperties, useContext } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

/** Interface to ProductButtons */
export interface Props {
    className?: string
    style?: CSSProperties
}

/**
 * Interfaz de ProductButtons
 *   @param className?   string
 *   @param style?       CSSProperties
 */
export const ProductButtons = ({ className, style }: Props) => {
    const { increaseBy, counter, isMaxCountReached } = useContext(ProductContext)

    // const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount])

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}> {counter} </div>
            <button
                className={`${styles.buttonAdd} ${isMaxCountReached ? styles.disable : ''}`}
                onClick={() => increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}
