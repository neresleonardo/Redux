import { createStore, applyMiddleware } from 'redux'
import { ICartState } from './modules/cart/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga'

import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

export interface IState {

        cart: ICartState;

}
/*
    Podemos pensar no store como o estado global do redux
*/

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
    )
    ); // Valor inicial

    sagaMiddleware.run(rootSaga);

export default store;