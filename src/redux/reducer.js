
import * as ActionType from './ActionType';

export const initialState={
dishes:[],
comments:[],
selectedDishId:"",
isloading:true,

}

export const Dishes = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.Fetch_Dishes:
            return {...state,dishes:action.payload, isloading:false}
        case ActionType.Fetch_Comments:
            return {...state,comments:action.payload}
        case ActionType.Store_Selected_Dishid:
            return {...state,selectedDishId:action.payload}
        default:
          return state;
      }
};
export default Dishes;