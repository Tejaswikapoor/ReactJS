
import * as ActionType from './ActionType';

export const initialState={
dishes:[]
}

export const Dishes = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.Fetch_Dishes:
            return {...state,dishes:action.payload}

        default:
          return state;
      }
};
export default Dishes;