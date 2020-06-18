import * as ActionType from './ActionType';



export const FetchAllDishes=()=>(dispatch)=>{
    // console.log("saufffffffa", type)
    return fetch("http://localhost:3000/dishes/", {
        method: "GET"
    }).then((response) => {
        response.json()
            .then(jsonResponse => dispatch(addDishes(jsonResponse))
            )});
}

export const addDishes = (dishes) => ({
    type: ActionType.Fetch_Dishes,
    payload: dishes
});