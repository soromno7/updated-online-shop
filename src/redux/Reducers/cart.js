const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            return {
                ...state,
                items: action.payload,
                totalPrice: action.payload.price,
            };
        default:
        return state;
    }
};

export default cart;