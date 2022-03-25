import { createStore } from 'redux'
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension'

export interface IState {

        cart: ICartState;

}
/*
    Podemos pensar no store como o estado global do redux
*/

const store = createStore(
    rootReducer,
    composeWithDevTools()
    ); // Valor inicial


export default store;