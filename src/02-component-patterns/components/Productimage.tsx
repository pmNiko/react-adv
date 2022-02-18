import { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

/** Interface to ProductImage */
export interface Props {
    img?: string
    className?: string
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
    let imgToShow: string

    const { product } = useContext(ProductContext)

    if (img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img
            src={imgToShow}
            alt="Product"
            className={`${styles.productImg} ${className}`}
            style={style}
        />
    )
}
