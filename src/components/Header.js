import logo from "../scss-img/logo.svg";
import cartLogo from "../scss-img/cart.svg";
import "../scss-img/header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Header() {

    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <>
            <div className="header">
                <div className="header-symbols">
                    <Link to='/'>
                        <img src={logo} heihgt="100" width="100" alt="logo"></img>
                    </Link>
                    <h3>REACT PIZZA</h3>
                </div>
                <Link to='/cart'>
                    <button className="header-btn">
                        <div className="header-btn-total-price">{totalPrice} руб.</div>
                        <div className="header-btn-counter-img">
                            <img src={cartLogo} alt="cart logo" width="20" height="20"></img>
                            <div>{totalCount}</div>
                        </div>

                    </button>
                </Link>
            </div>
        </>
    );
}

export default Header;