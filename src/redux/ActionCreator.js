import * as ActionType from './ActionType';



export const FetchAllDishes=()=>(dispatch)=>{
    // console.log("saufffffffa", type)
    return fetch("http://localhost:3000/dishes/", {
        method: "GET",
       
    }).then((response) => {
        response.json()
            .then(jsonResponse => dispatch(addDishes(jsonResponse))
            )});
}

export const FetchAllComments=(dishid)=>(dispatch)=>{
    // console.log("saufffffffa", type)
    // /:dishId/comments
    return fetch("http://localhost:3000/dishes/"+dishid+"/comments", {
        method: "GET",
       
    }).then((response) => {
        response.json()
            .then(jsonResponse => dispatch(addComment(jsonResponse))
            )});
}
export const addDishes = (dishes) => ({
    type: ActionType.Fetch_Dishes,
    payload: dishes
});
export const addComment = (comments) => ({
    type: ActionType.Fetch_Dishes,
    payload: comments
});
export const storeDishId = (dishid) => ({
    type: ActionType.Store_Selected_Dishid,
    payload: dishid
});

