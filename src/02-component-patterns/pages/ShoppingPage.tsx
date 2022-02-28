import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/'
import products from '../data/product'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {/* Técnica 1 componentes tradicionales */}
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark"
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                        />

                        <ProductTitle className="text-white text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>

            {/* Cart  */}
            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, productInCart]) => (
                    <ProductCard
                        key={key}
                        product={productInCart}
                        className="bg-dark"
                        style={{ width: '7rem' }}
                        onChange={onProductCountChange}
                        value={productInCart.count}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                        />
                        <ProductButtons
                            className="custom-buttons"
                            style={{ display: 'flex', justifyContent: 'center' }}
                        />
                    </ProductCard>
                ))}
            </div>

            {/* <div>
                <h6>{JSON.stringify(shoppingCart)}</h6>
            </div> */}
        </div>
    )
}
