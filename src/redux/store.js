import {createStore,applyMiddleware,combineReducers} from 'redux';
// import {fetchdata} from './Reducer';
import {persistStore} from "redux-persist";
import thunk from 'redux-thunk';
import rootreducer from "./rootreducer";

// export const ConfigureStore=()=>{
//     const store=createStore(
//         combineReducers({
//             fetchdata:fetchdata
//         }),
//        applyMiddleware(thunk)
//         );
//     return store;
// }
export const store=createStore(
    rootreducer,
    applyMiddleware(thunk)
);
//export default store;
  export const persistor = persistStore(store);

export default {store,persistor};