import React from 'react';

import Main from './components/MainComponent';

import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';

// import  {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
            <div > 
              <Main/>
            </div>
            </PersistGate>
      </BrowserRouter>
    </Provider>
    ); 
};

export default App;
