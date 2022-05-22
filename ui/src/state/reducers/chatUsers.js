const chatUsers = (state =[], action)=>{
    switch(action.type){
        case 'APPENDTOCHAT':
            return [...state, action.payload]
        case 'REMOVEFROMCHAT':
            return state.filter(user => 
                user !== action.payload )
        default:
            return state
    }
}

export default chatUsers