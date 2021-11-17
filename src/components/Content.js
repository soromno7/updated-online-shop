import "../scss-img/content.scss";
import plus from "../scss-img//plus.svg";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import AddPizzaToCart from "../redux/Actions/cart.js";


export function Content({ id, name, imageUrl, price, sizes, types, onClickAddPizza }) {

    const [activeType, setActiveType] = useState();
    
    const [activeSize, setActiveSize] = useState();
    
    const dispatch = useDispatch();

    const addPizzaHandler = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            type: activeType,
            size: activeSize,
        }
        onClickAddPizza(obj)
    }

    return (
        <>
            <div className="pizzaCardContainer" key={`${name}+${id}`}>
                <img src={imageUrl} alt={'img num' + {id}}></img>
                    <h5>{name}</h5>  
                <div className="pizzaCardBtns">
                    <div className="typesContainer">
                        {types.map((name) => (
                        <h6 className={activeType === name ? 'typeItem-active' : 'typeItem'}
                        key={`${name} + ${id}`}
                        onClick={() => setActiveType(name)}
                        >
                        {name}</h6>))}
                    </div>
                    <div className="sizesContainer">{sizes.map((size) =>
                        (<h6 className={activeSize === size ? 'sizeItem-active' : 'sizeItem'}
                        key={`${size} + ${id}`}
                        onClick={() => setActiveSize(size)}> {size} см.</h6>))}
                    </div>
                </div>
                <div className="pizzaCardBottomContainer">
                    <h4>от {price} руб.</h4>
                    <div className="addToCartBtn">
                        <img src={plus} alt="plus"></img>
                        <h5 onClick={addPizzaHandler}>Добавить</h5>
                    </div>
                </div>

            </div>
        </>
    );
}

Content.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number.isRequired,
}

export default Content;