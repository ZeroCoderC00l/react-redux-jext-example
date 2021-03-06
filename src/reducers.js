//if the state is undefined, we set it to an empty array of products.
const products = (state=[], action) => {
    if (action.type === 'REPLACE_PRODUCTS') {
        return action.products;
    }

    return state;
};

//if the state is undefined, we set it to an empty array of cart.
const cart = (state=[], action) => {
    if (action.type === 'ADD_TO_CART') {
        return state.concat(action.product);
    } else if (action.type === 'REMOVE_FROM_CART') {
        return state.filter(product => product.id !== action.product.id);
    }

    return state;
};

export {products, cart};