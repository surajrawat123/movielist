export const release = (data) =>{
    return{
        type:'releaseDate',
        payload:data
    }
}

export const rank = (data) => {
    return{
        type:"rank",
        payload:data
    }
}