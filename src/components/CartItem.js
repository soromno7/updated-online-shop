import inc from "../scss-img/inc.svg";
import dec from "../scss-img/dec.svg";
import cross from "../scss-img/cross.svg";
import { useState } from "react";
import { RemovePizzaFromCart } from "../redux/Actions/cart.js";
import { useDispatch } from "react-redux";

export function CartItem({ id, name, imageUrl, price, type, size}) {

    const dispatch = useDispatch();

    let [quantity, setQuantity] = useState(1);

    const quantityHandler = () => {
        if(quantity === 1) {
            return;
        }
        setQuantity(quantity - 1)
    }

    return (
        <>
            <div className="cartItem">
                <div className="cartItemLeft">
                    <img src={imageUrl} alt="cart logo" width="120" height="120"></img>
                    <div className="cartItemInfo">
                        <h4>{name}</h4>
                        <span>{type} тесто, {size} см</span>
                    </div>
                </div>
                <div className="cartItemRight">
                    <div className="cartItemRightCounter">
                        <img src={dec} alt="inc" width="40" height="40" onClick={quantityHandler}></img>
                        <h4>{quantity}</h4>
                        <img src={inc} alt="dec" width="40" height="40" onClick={() => setQuantity(quantity + 1)}></img>
                    </div>
                    <h4 className="cartItemRightPrice">{price * quantity} руб.</h4>
                    <img src={cross} alt="cross" width="40" height="40" onClick={() => dispatch(RemovePizzaFromCart(id, price))}></img>
                </div>
            </div>
        </>
    )
}

export default CartItem;