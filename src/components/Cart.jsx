export default function Cart(props){
    const { quantity = [], showBasket = Function.prototype } = props
    // console.log(quantity);
    return(
        <button type="button" className="btn btn-primary position-relative fs-5 cart position-fixed " style={{}} onClick={showBasket}>
            <span className="bi bi-cart4"> <span className="word">Savatcha</span></span> 
            {
                quantity.length ?
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                    {quantity.length < 10 ? quantity.length : <>+9</>}
                    <span className="visually-hidden">Basket</span>
                </span> : 
                <></>
            }
        </button>
    )
}