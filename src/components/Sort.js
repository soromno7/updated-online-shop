import { useState, useRef, useEffect } from "react";
import triangle from "../scss-img/triangle.svg";
import "../scss-img/sort.scss";

export function Sort() {

    const sortByList = ['популярности', 'убыванию цены', 'возрастанию цены', 'алфавиту'];

    const [visiblePopup, setVisiblePopup] = useState(false);

    const sortLabel = useRef();

    const clickHandler = (e) => {
        if(e.path.includes(sortLabel.current)) {
            setVisiblePopup(!visiblePopup)
        };
        if(!e.path.includes(sortLabel.current)) {
            setVisiblePopup(visiblePopup)
        };
    }

    useEffect(() => {
        document.body.addEventListener("click", clickHandler)
    }, []);

    const [activeCategory, setActiveCategory] = useState(sortByList[0]);

    return (
        <div className="sort-container">
            <div className="sort-label">
                <img src={triangle} alt="triangle" width="10" height="10" className={visiblePopup === true ? 'rotated' : ''}></img>
                <b>Сортировка по: </b>
                <span ref={sortLabel}>{activeCategory}</span>
            </div>
            <div className={visiblePopup ? "sort-popup" : "sort-popup-hidden"}>
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
