const chatUsers = (state ={}, action)=>{
    switch(action.type){
        case 'APPENDTOCHAT':
            return state = action.payload
        case 'REMOVEFROMCHAT':
            return state = {}
        default:
            return state
    }
}

export default chatUsers