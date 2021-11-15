import { useState, useRef, useEffect } from "react";
import triangle from "../scss-img/triangle.svg";
import "../scss-img/sort.scss";
import {  useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/Actions/filters.js"


export function Sort() {

    const dispatch = useDispatch();

    const { sortBy } = useSelector(({ filters }) => {
        return {
          sortBy: filters.sortBy,
        }
      });

    const sortByList = ['популярности', 'убыванию цены', 'возрастанию цены', 'алфавиту'];
    // const sortByList = [
    //                     {name: 'популярности',
    //                     sortType: 'rating'},

    //                     {name: 'убыванию цены',
    //                     sortType: 'desc'},

    //                     {name: 'возрастанию цены',
    //                     sortType: 'asc'},
                        
    //                     {name: 'алфавиту',
    //                     sortType: 'alphabet'},
    //                 ];

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
                <span ref={sortLabel}>{sortBy}</span>
            </div>
            <div className={visiblePopup ? "sort-popup" : "sort-popup-hidden"}>
                <ul>
                    {sortByList.map((name, identifier) => (
                        <li className={activeCategory === name ? 'sortByItem-active' : 'sortByItem'}
                        onClick={() => {dispatch(setSortBy(name))}}
                        // onClick={() => {setActiveCategory(name)}}
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
