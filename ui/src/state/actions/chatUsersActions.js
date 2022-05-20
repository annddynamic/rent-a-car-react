export const appendUserToChat = (user) =>{
    return {
        type:'APPENDTOCHAT',
        payload: user
    }
}
export const removeUserFromChat = (user) =>{
    return {
        type:'REMOVEFROMCHAT',
        payload: user
    }
}