import "../scss-img/cart.scss";
import cartLogo from "../scss-img/cart.svg";
import trashcan from "../scss-img/trashcan.svg";
import CartItem from "./CartItem.js";


export function Cart() {
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
                    <CartItem />
                </div>
            </div>
        </>
    )
}

export default Cart;