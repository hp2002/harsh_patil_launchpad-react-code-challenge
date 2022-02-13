import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts/";
const LIM_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";

export function fetchPosts() {

    return(async (dispatch)=> {
        const response = await axios.get(LIM_URL);
        dispatch({
            type: "GET",
            payload: response.data,
        });
    })
}
export function actionCreate(id,title,body) {

    return (async (dispatch) => {
        await axios.post(URL, {
            id,
            title,
            body,
        }).then(function(response){console.log(response)})
        dispatch({
            type: "CREATE",
            payload: {
            id,
            title,
            body
        }
    })
    })
}

export function actionDelete(id) {

    return(async (dispatch) => {
        await axios.delete(URL + id)
        dispatch({
            type: "DELETE",
            payload: {
                id
            }
        })
    })
    
}

export function actionEdit(id, title, body) {

    return(async (dispatch) =>{
        dispatch({
            type: "EDIT",
            payload: {
                id,
                title,
                body,
            }
        })
    })
}

export function actionSearch(id) {
    
    return(async (dispatch) => {
        const response = await axios.get(URL + id);
        dispatch({
            type: "SEARCH",
            payload: response.data,
        })
    })
    
}


