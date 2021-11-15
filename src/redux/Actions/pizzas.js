export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
    isLoaded: true,
  });
export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})
