import inc from "../scss-img/inc.svg";
import dec from "../scss-img/dec.svg";
import cross from "../scss-img/cross.svg";

export function CartItem({ id, name, imageUrl, price, type, size}) {
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
                        <img src={dec} alt="inc" width="40" height="40"></img>
                        <h4>1</h4>
                        <img src={inc} alt="dec" width="40" height="40"></img>
                    </div>
                    <h4 className="cartItemRightPrice">{price} руб.</h4>
                    <img src={cross} alt="cross" width="40" height="40"></img>
                </div>
            </div>
        </>
    )
}

export default CartItem;