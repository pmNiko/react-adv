import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/'

const product = {
    id: '1',
    title: 'Coffee Mug 1',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
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
                {/* Técnica 2 Subcomponentes como propiedades del componente padre */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Cafe 1" />
                    <ProductCard.Buttons />
                </ProductCard>

                {/* Técnica 1 componentes tradicionales */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
