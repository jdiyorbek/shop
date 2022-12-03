import { useEffect, useState } from "react"
import { API_URL, API_KEY } from "../config"
import ProductList from "./ProductList"
import Loader from "./Loader"
import Cart from "./Cart"
import Basket from "./Basket"
import {toast} from "react-toastify"

export default function Shop(){
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [basket, setBasket] = useState(false)


    const showBasket = () => {
        setBasket(!basket)
    }

    function deleteFromBasket(orderID, event){
        const newOrder = order.filter(item => item.id !== orderID)
        // const proIdx = product.findIndex(item => item.id == orderID)
        // console.log(proIdx);
        // const newItem = product.findIndex((item) => {
        //     return orderID == item.id
        // })
        // e.addedToCart === false
        setOrder(newOrder)
        toast.error("Savatchadan olib tashlandi")
    }

    const addToCart = (item, e) => {
        const checkOrder = order.findIndex(el => {
            return el.id == item.id
        })
        if(checkOrder < 0){
            // console.log(e);
            const newItem = {
                ...item, 
                quantity: 1,
                addedToCart: true,
            }
            setOrder([...order, newItem])
            toast.success("Savatcha qo'shildi")
        }else{
            toast.warning("Bu mahsulot allaqachon savatcha qo'shilgan")
        }
        // e.path[0].classList.remove
        // e.path[0].className = "btn btn-primary"
        // e.path[0].innerText = "Added to cart"
        // e.path[0].disabled = true
        // e.removeEventListener
        // console.log(e);
        // console.log(order);
    }

    const setQuantity = (itemID, mat) => {
        const newOrders = order.map((el) => {
            if(mat === "+"){
                if(itemID === el.id) {
                    const newQuantity = el.quantity + 1
                    return {
                        ...el,
                        quantity: newQuantity
                    }
                }else{
                    return{
                        ...el
                    }
                }
            }if(mat === "-"){
                if(itemID === el.id && el.quantity > 1) {
                    const newQuantity = el.quantity - 1
                    return {
                        ...el,
                        quantity: newQuantity
                    }
                }else{
                    return{
                        ...el
                    }
                }
            }
        })
        setOrder(newOrders)
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
        .then(response => response.json())
        .catch(() => {
            setTimeout(()=>{
                alert("Internetni tekshiring")
            }, 1000)
        })
        .then(data => {
            const information = data.featured.map(item => {
                const newPro = {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    type: item.type,
                    price: item.price,
                    image: item.image,
                    addedToCart: false,
                }
                return newPro
            })
            setProduct(information)
            setLoading(false)
        })
    }, [])

    return(
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center">
                
                <div className="col-11">
                    <Cart quantity={order} showBasket={showBasket}/>
                    <div className='content'>
                        {loading ?  <Loader /> : <ProductList product={product} addToCart={addToCart} inBasket={order}/> }
                        {/* <ProductList product={product}/> */}
                        {/* <h1>Product</h1>  */}
                    </div>
                </div>
            </div>
            {basket && <Basket 
                showBasket={basket} 
                order={order} 
                showBasketFunc={showBasket}
                deleteFromBasket={deleteFromBasket}
                setQuantity={setQuantity}
            />}
        </>
    )
}