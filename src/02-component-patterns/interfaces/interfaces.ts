import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductImageProps } from '../components/Productimage'
import { Props as ProductButtonsProps } from '../components/ProductButtons'

/**Interfaz del contexto */
export interface ProductContextProps {
    counter: number
    increaseBy: (value: number) => void
    product: Product
}

/**Interfaz de Product */
export interface Product {
    id: string
    title: string
    img?: string
}

/**Interfaz de ProductCardHOC extiende 
 * las propiedades de ProductCard para 
 * poder utilizar subcomponentes como props.
 */
export interface ProductCardHOCProps {
    (Props: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

/**Interface de onChange. Contiene el producto y cantidad seleccionada  */
export interface onChangeArgs {
    product: Product
    count: number
}














/* -------------------    Refactorizaciones ---------------------------------- */



// Construcción duplicada de las interfaces se refactoriza 
// para no duplicar el codigo.
/* export interface ProductCardHOCProps {
    (Props: ProductCardProps): JSX.Element,
    Title: (Props: { title?: string, className?: string }) => JSX.Element,
    Image: (Props: { img?: string, className?: string }) => JSX.Element,
    Buttons: (Props: { className?: string }) => JSX.Element
} */