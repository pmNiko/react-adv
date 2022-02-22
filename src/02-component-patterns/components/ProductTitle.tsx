import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

/** Interface to ProductTitle */
export interface Props {
    title?: string
    className?: string
    style?: CSSProperties
}

/**
 *
 * @param title? string
 * @param className? string
 * @param styles? CSSProperties
 */
export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext)

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {title ? title : product.title}
        </span>
    )
}
