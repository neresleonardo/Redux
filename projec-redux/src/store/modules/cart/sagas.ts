import { all, select, takeLatest } from 'redux-saga/effects'
import { addProductToCart } from './action'
import { IState } from '../..'
type CheckProductStock = ReturnType<typeof addProductToCart>;

function* checkProductStock({payload}: CheckProductStock) {
    const { product } = payload;
    
    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    })

    console.log(currentQuantity);
    
    
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])