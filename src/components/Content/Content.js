import "./style.scss";
import plus from "./img/plus.svg";
import { useState } from "react";

const typesArray = ['тонкое', 'традиционное']

export function Content({ id, name, imageUrl, price, sizes, types }) {

    const [activeType, setActiveType] = useState();

    return (
        <>
            <div className="pizzaCardContainer" key={`${name}+${id}`}>
                <img src={imageUrl} alt={'img num' + {id}}></img>
                    <h5>{name}</h5>  
                <div className="pizzaCardBtns">
                    <div className="typesContainer">
                        {types.map((identifier) => (
                        <h6 className={ activeType === typesArray[identifier] ? 'typeItem-active' : 'typeItem'}
                        key={`${typesArray[identifier]} + ${id}`}
                        >
                        {typesArray[identifier]}</h6>))}
                        </div>
                    <div className="sizesContainer">{sizes.map((e) => (<h6 className="sizeItem" key={`${e} + ${id}`}> {e} см</h6>))}</div>
                </div>
                <div className="pizzaCardBottomContainer">
                    <h5>от {price} ₽</h5>
                    <div className="addToCartBtn">
                        <img src={plus} alt="plus"></img>
                        <h5>Добавить</h5>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Content;