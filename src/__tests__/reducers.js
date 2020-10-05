import { products, cart } from '../reducers';

describe('products', () => {

    it('returns the initial state', () => {
        expect(products(undefined, {})).toEqual([]);
    });

    it('receives products', () => {
        const productList = [
            { id: 1, name: 'Product 1', price: 100, image: "" }
        ];

        expect(
            products([],
                {
                    type: 'REPLACE_PRODUCTS',
                    products: productList
                }
            )).toEqual(productList);
    })

});

describe('cart', () => {
    it('returns the initial state', () => {
        expect(cart(undefined, {})).toEqual([]);
    });

    it('adds products into cart', () => {
        const productList = [{ id: 1, name: 'Product 1', price: 100, image: "" }];

        expect(cart([], {
            type: 'ADD_TO_CART',
            product: { id: 1, name: 'Product 1', price: 100, image: "" }
        })).toEqual(productList);
    });

    it('removes a product from cart', () => {
        const productList = [
            { id: 1, name: 'Product 1', price: 100, image: "" },
            { id: 2, name: 'Product 2', price: 300, image: "" }
        ];

        const productListWithoutRemoved = [
            { id: 1, name: 'Product 1', price: 100, image: "" }
        ];

        expect(cart(productList, {
            type: 'REMOVE_FROM_CART',
            product: { id: 2, name: 'Product 2', price: 300, image: "" }
        })).toEqual(productListWithoutRemoved);
    });
})
