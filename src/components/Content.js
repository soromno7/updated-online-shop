import "../scss-img/content.scss";
import plus from "../scss-img//plus.svg";
import { useState } from "react";
import PropTypes from 'prop-types';
import pizzasReducer from "../redux/Reducers/pizzas";

export function Content({ id, name, imageUrl, price, sizes, types }) {

    const [activeType, setActiveType] = useState();
    
    const [activeSize, setActiveSize] = useState();

    return (
        <>
            <div className="pizzaCardContainer" key={`${name}+${id}`}>
                <img src={imageUrl} alt={'img num' + {id}}></img>
                    <h5>{name}</h5>  
                <div className="pizzaCardBtns">
                    <div className="typesContainer">
                        {types.map((name, index) => (
                        <h6 className={activeType === index ? 'typeItem-active' : 'typeItem'}
                        key={`${name} + ${id}`}
                        onClick={() => setActiveType(index)}
                        >
                        {name}</h6>))}
                    </div>
                    <div className="sizesContainer">{sizes.map((size, index) =>
                        (<h6 className={activeSize === index ? 'sizeItem-active' : 'sizeItem'}
                        key={`${size} + ${id}`}
                        onClick={() => setActiveSize(index)}> {size} см.</h6>))}
                    </div>
                </div>
                <div className="pizzaCardBottomContainer">
                    <h4>от {price} ₽</h4>
                    <div className="addToCartBtn">
                        <img src={plus} alt="plus"></img>
                        <h5>Добавить</h5>
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