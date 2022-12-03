import {ProductItem} from "./ProductItem"

export default function ProductList(props){
    const {product = [], addToCart} = props
    // console.log(product);

    if(!product.length){
        return <h3>Hech narsa topilmadi</h3>
    }

    return(
        <div className="d-flex align-items-center justify-content-around flex-wrap">
            {/* <h1>Product</h1> */}
            {
                product.map((item) => (
                    <ProductItem key={item.id} {...item} addToCart={addToCart}/>
                ))

            }
        </div>
    )
}