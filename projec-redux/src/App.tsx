import React from 'react';

import { Provider } from 'react-redux'
import Card from './components/Card';
import Catalog from './components/Catalog';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Card />
    </Provider>
  );
}

export default App;
