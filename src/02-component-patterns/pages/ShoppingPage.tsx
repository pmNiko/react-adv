import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/'
import products from '../data/product'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark"
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {({ count, maxCount, isMaxCountReached, increaseBy, reset }): JSX.Element => (
                    <>
                        <ProductImage
                            className="custom-image"
                            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                        />

                        <ProductTitle className="text-white text-bold" />
                        <ProductButtons className="custom-buttons" />
                        <button onClick={reset}>Volver a estado inicial</button>
                        <button onClick={() => increaseBy(-2)}>-2</button>

                        {isMaxCountReached ? (
                            <>
                                <br />
                                <span style={{ color: 'red' }}>
                                    Ha llegado a la cantidad maxima!
                                </span>
                            </>
                        ) : (
                            <button onClick={() => increaseBy(+2)}>+2</button>
                        )}
                        <span style={{ color: 'white' }}>
                            {count} - {maxCount}
                        </span>
                    </>
                )}
            </ProductCard>
        </div>
    )
}
