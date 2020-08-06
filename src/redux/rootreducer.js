import Dishes from './reducer';
import sessionStorage from 'redux-persist/lib/storage/session';
import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
 // import sessionStorage from "redux-persist/types/storage/session";

const persistConfig={
    key:'root',
    storage:sessionStorage,
    whiteList:['Dishes']

}

const rootreducer= combineReducers({
    Dishes:Dishes
})
// export default rootreducer;

 export default persistReducer(persistConfig,rootreducer);