import { createStore } from 'redux'
import rootReducer from './modules/rootReducer';

/*
    Podemos pensar no store como o estado global do redux
*/

const store = createStore(rootReducer); // Valor inicial


export default store;