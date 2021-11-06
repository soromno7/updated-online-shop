import { useState } from "react";
import "./style.scss";

const navBarArray = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Микс', 'Детям']

export function Nav() {

    const [activeButton, setActiveButton] = useState(0);

    return (
        <>
            <ul className="nav">
                {navBarArray.map((name, identifier) => (
                    <li
                    className={activeButton === identifier ? 'navBtn-active' : 'navBtn'}
                    key={`${name}_${identifier}`}
                    onClick={() => {setActiveButton(identifier)}}>
                    {name}
                    </li>
                ))}
            </ul>
        </>
    );
}
export  default Nav;