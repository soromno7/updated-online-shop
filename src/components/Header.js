import logo from "../scss-img/logo.svg";
import cartLogo from "../scss-img/cart.svg";
import "../scss-img/header.scss";

export function Header() {
    return (
        <>
            <div className="header">
                <div className="header-symbols">
                    <img src={logo} heihgt="100" width="100" alt="logo"></img>
                    <h3>REACT PIZZA</h3>
                </div>
                <div className="header-btn">
                    <span>333 </span>
                    <span>|</span>
                    <img src={cartLogo} alt="cart logo" width="35" height="35"></img>
                </div>
            </div>
        </>
    );
}

export default Header;