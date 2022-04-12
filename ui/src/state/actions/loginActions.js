export const login = (token)=>{
    return {
        type:'LOGIN',
        payload:{
            token
        }
    }
}

export const logout = ()=>{
    return {
        type:'LOGOUT'
    }
}

export const setLogin = (ls, token) =>{
    return {
        type:'SETLOGIN',
        payload: {
            ls,
            token
        }
    }
}