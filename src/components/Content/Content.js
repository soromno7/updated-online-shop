import "./style.scss";

export function Content({ id, name, imageUrl, price, sizes }) {
    return (
        <>
            <div className="pizzaCardContainer" key={`${name}+${id}`}>
                <img src={imageUrl} alt={'img num' + {id}}></img>
                <h5>{name}</h5>
                <span>Цена: {price} ₽</span>
                <span>{sizes.map((e) => (<span> {e}см,</span>))}</span>
            </div>
        </>
    );
}

export default Content;