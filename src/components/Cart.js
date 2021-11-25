import "../scss-img/cart.scss";
import cartLogo from "../scss-img/cart.svg";
import trashcan from "../scss-img/trashcan.svg";
import CartItem from "./CartItem.js";
import { useSelector, useDispatch } from "react-redux";
import { ClearCart } from "../redux/Actions/cart.js";
import cartPlugIcon from "../scss-img/man-shopping.svg";
import { Link } from "react-router-dom";

export function Cart() {

    const { items } = useSelector(({ cart }) => cart);

    const dispatch = useDispatch();

    const RemoveAllPizzzaFromCartByClick = () => {
        dispatch(ClearCart([]))
    }

    return (
        <>
            <div className="cartContainer">
                <div className="cartHeader">
                    <div className="cartHeaderLeft">
                        <img src={cartLogo} alt="cart logo" width="45" height="45"></img>
                        <h2>Корзина</h2>
                    </div>
                    <div className="cartHeaderRight" onClick={RemoveAllPizzzaFromCartByClick}>
                        <img src={trashcan} alt="trashcan"></img>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="cartList">
                    {items.length === 0 ? (
                                <div className="cartPlugContainer">
                                    <h3>Здесь пусто :(</h3>
                                    <div className="cartPlugText">
                                        <span>Похоже, вы ещё не добавили пиццу в корзину.</span><br></br>
                                        <span>Чтобы добавить пиццу в корзину, перейдите на главную страницу.</span>
                                    </div>
                                    <img src={cartPlugIcon} alt="cart-plug-icon" width="300" height="300"></img>
                                </div>
                    ) : items.map((obj) => (<CartItem {...obj} key={obj.id} />))}
                </div>
                <Link to="/">
                    <button className="cartContainerBackToHomeBtn">На главную</button>
                </Link>
            </div>
        </>
    )
}

export default Cart;