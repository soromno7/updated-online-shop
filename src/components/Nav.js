import { useDispatch } from "react-redux";
import { setCategory } from "../redux/Actions/filters.js";
import { store } from "../redux/store.js";
import React from "react";
import { useState } from "react";
import "../scss-img/nav.scss";

const navBarArray = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Микс', 'Детям']

export const Nav = React.memo(
    function Nav() {

        const [activeBtn, setActiveBtn] = useState(0);

        const dispatch = useDispatch();
    
        return (
            <>
                <ul className="nav">
                    {navBarArray.map((name, identifier) => (
                        <li
                        className={store.getState().filters.category === identifier ? 'navBtn-active' : 'navBtn'}
                        key={`${name}_${identifier}`}
                        onClick={() => {setActiveBtn(dispatch(setCategory(identifier)))}}
                        >
                        {name}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
);

export  default Nav;