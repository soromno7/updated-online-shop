import "../scss-img/cart.scss";
import cartLogo from "../scss-img/cart.svg";
import trashcan from "../scss-img/trashcan.svg";
import CartItem from "./CartItem.js";
import { useSelector } from "react-redux";


export function Cart() {

    const { items, totalPrice, totalCount } = useSelector(({ cart }) => {
        return {
            items: cart.items,
            totalPrice: cart.totalPrice,
            totalCount: cart.totalCount,
        }

    });

    return (
        <>
            <div className="cartContainer">
                <div className="cartHeader">
                    <div className="cartHeaderLeft">
                        <img src={cartLogo} alt="cart logo" width="45" height="45"></img>
                        <h2>Корзина</h2>
                    </div>
                    <div className="cartHeaderRight">
                        <img src={trashcan} alt="trashcan"></img>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="cartList">
                    {items.map((obj) => (<CartItem {...obj}/>))}
                </div>
            </div>
        </>
    )
}

export default Cart;