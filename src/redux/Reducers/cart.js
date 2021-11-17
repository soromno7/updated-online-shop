const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            return {
                ...state,
                items: state.items.concat([action.payload]),
                totalPrice: state.totalPrice+= action.payload.price,
                totalCount: state.totalCount+= 1,
            };
        default:
        return state;
    }
};

export default cart;