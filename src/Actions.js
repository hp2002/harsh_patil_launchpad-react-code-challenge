export function actionCreate(id,title,body) {
    return ({
        type: "CREATE",
        payload: {
            id,
            title,
            body
        }
    })
}