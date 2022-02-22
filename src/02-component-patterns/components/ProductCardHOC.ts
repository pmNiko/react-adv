import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './Productimage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

/**
 * Se extiende el Componente ProductCard
 * asignandole nuevas propiedades como 
 * componentes. 
 */
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard