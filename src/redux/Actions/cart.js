export const AddPizzaToCart = (obj) => ({
    type: "ADD_PIZZA_TO_CART",
    payload: obj,
});

export const ClearCart = (arr) => ({
    type: "REMOVE_ALL_PIZZA_FROM_CART",
    payload: arr,
})

export const RemovePizzaFromCart = (id, price) => ({
    type: "REMOVE_PIZZA_FROM_CART",
    payload: {id, price}
})
export default AddPizzaToCart;