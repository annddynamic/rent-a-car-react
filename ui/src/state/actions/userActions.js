export const setUser = (user) =>{
    return {
        type:'SETUSER',
        payload: user
    }
}

export const unsetUser = () =>{
    return {
        type:'UNSETUSER',
    }
}