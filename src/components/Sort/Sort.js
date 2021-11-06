import { useState } from "react";
import triangle from "./img/triangle.svg";
import "./style.scss";

export function Sort() {

    const sortByList = ['популярности', 'убыванию цены', 'возрастанию цены', 'алфавиту'];

    const [activeCategory, setActiveCategory] = useState(sortByList[0]);

    return (
        <div className="sort-container">
            <div className="sort-label">
                <img src={triangle} alt="triangle" width="10" height="10"></img>
                <b>Сортировка по: </b>
                <span>{activeCategory}</span>
            </div>
            <div className="sort-popup">
                <ul>
                    {sortByList.map((name, identifier) => (
                        <li className={activeCategory === name ? 'sortByItem-active' : 'sortByItem'}
                        onClick={() => {setActiveCategory(name)}}
                        key={`${name}+${identifier}`}>
                        {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            
    );
}



export default Sort
