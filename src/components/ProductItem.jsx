function ProductItem(props){
    const {id, name, description, type, price, image, addedToCart, addToCart} = props

    // console.log(props);

    // const checkOrder = inBasket.some(item => {
    //     return id === item.id
    // })


    return(
        <>
            <div className="card" style={{width: "18rem", margin: "10px 0",}}>
                <img src={props.image} className="card-img-top" alt="Product image"/>
                <div className="card-body">
                    <small>#{props.id}</small>
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <h6>{props.price}$</h6>
                    
                    {addedToCart
                    ? 
                    <button className="btn btn-danger" disabled>Qo'shilgan</button> 
                    : 
                    <button className="btn btn-primary" onClick={() => {
                        addToCart({id, name, price, image}, event)
                    }}><i className="bi bi-cart-plus"></i> Savatchaga qo'shish</button>}
                </div>
            </div> 
        </>
        
    )
}

export {ProductItem}