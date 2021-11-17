import inc from "../scss-img/inc.svg";
import dec from "../scss-img/dec.svg";
import cross from "../scss-img/cross.svg";

export function CartItem() {
    return (
        <>
            <div className="cartItem">
                <div className="cartItemLeft">
                    <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_366x366.jpeg" alt="cart logo" width="120" height="120"></img>
                    <div className="cartItemInfo">
                        <h4>Четыре сыра</h4>
                        <span>тонкое тесто, 30 см</span>
                    </div>
                </div>
                <div className="cartItemRight">
                    <div className="cartItemRightCounter">
                        <img src={dec} alt="inc" width="40" height="40"></img>
                        <h4>1</h4>
                        <img src={inc} alt="dec" width="40" height="40"></img>
                    </div>
                    <h4 className="cartItemRightPrice">220</h4>
                    <img src={cross} alt="cross" width="40" height="40"></img>
                </div>
            </div>
        </>
    )
}

export default CartItem;