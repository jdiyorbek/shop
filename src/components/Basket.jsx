import BasketItem from "./BasketItem";

export default function Basket(props) {
    const { showBasket,  order = [], showBasketFunc = Function.prototype} = props

    // console.log(order);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    const animation = showBasket ? "basket-close" : "basket-open"

    return(
        <div className={"col-7 bg-light h-100 basket " + animation} id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={showBasket ? {right: "0"} : {}}>
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Savatcha</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={showBasketFunc}></button>
            </div>
            <div className="offcanvas-body basket-body">
            <ol>
                {
                    order.length 
                    ? 
                    order.map((item) => {
                        return(
                            <BasketItem key={item.id} {...item} deleteFromBasket={props.deleteFromBasket} setQuantity={props.setQuantity}/>
                        )
                    })
                    :
                    (<p>Basket is empty</p>)          
                }
            </ol>
            </div>
            <div className="total-price text-center p-3 bg-dark text-light fw-bold">
                Jami: {totalPrice}$
            </div>
        </div>
    )
}