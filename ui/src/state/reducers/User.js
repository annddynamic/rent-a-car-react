const UserReducer = (state =0, action)=>{
    switch(action.type){
        case 'SETUSER':
            return state+1
        case 'UNSETUSER':
            return state-1
        default:
            return state
    }
}

export default UserReducer