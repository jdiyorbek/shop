export default function BasketItem(props){
    const {id, name, description, type, price, image, quantity, deleteFromBasket, setQuantity} = props
    return(
        <li className="m-1 d-flex align-items-center justify-content-between">
            <span>
                <span>{name} </span>
                <span>{quantity}-ta <b>{price * quantity}$ </b> </span>
            </span>
            <span>
                <button className="btn btn-primary m-1" onClick={() => {
                    setQuantity(id, "+")
                }}>+</button>
                <button className="btn btn-danger m-1" onClick={() => {
                    setQuantity(id, "-")
                }}>-</button>
                <button className="btn btn-danger m-1" onClick={() => {
                    deleteFromBasket(id, event)
                }} title="Olib tashlash"><i className="bi bi-trash"></i></button>
            </span>
        </li>
    )
}